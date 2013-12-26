var player = {
  model : {   
    objects : new THREE.Object3D(),
    motion  : 'stand',
    state   : 'stand'
  },
  position: {
    x : 0,
    y : .5,
    z : 0,
    direction : 0
  },
  camera : {
    speed : 300,
    distance : 5,
    x : 0,
    y : .5,
    z : 0
  },
  color:{
    r : 0,
    g : 0,
    b : 0
  },
  Chat: ""
}

var myAPP = angular.module('myAPP',[]);

myAPP.controller('getChat', ['$scope', function($scope) {
  $scope.ChatPush = function() {
    player.Chat = $scope.ChatCrtl;
    var talk_to_server = socket_update_talk(player.Chat);
  };
}]);

var meshArray = [];
var Cube_list;
var Cube_Color_list = [];
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var url = window.location.href;
var arr = url.split("/");
var arr_2 = arr[2].split(":");
console.log(arr_2);


function socket_get_res (callback){
  socket.get('/game/all',{
    message: username
  }, function (response) {
    // response === {success: true, message: 'hi there!'}
    //console.log(response);
    callback(response);
  });
}

function socket_update_user (posx,posz){
  socket.get('/game/move',{
    message: {
      username: username,
      posX: posx,
      posZ: posz
    }
  },function(response){
    //console.log(response);
  });
}

function socket_update_talk (talk_content){
  socket.get('/game/talk',{
    message: {
      username: username,
      Chat: talk_content
    }
  },function(response){
    //console.log(response);
  });
}

function socket_get_user_info (callback){
  socket.get('/game/get_user_info',{
    message: username
  },function (response){
    callback(response);
  });
}

player.position.x = posX;
player.position.z = posZ;
player.camera.x = posX;
player.camera.z = posZ;
player.color.r = colorR;
player.color.g = colorG;
player.color.b = colorB;
player.Chat = Chat;

init();

function init(){

  // test if webgl is supported
  if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
  //===============container element=========================
  container = document.getElementById('tq_field');
  //document.body.appendChild( container );


  var width = window.innerWidth/2;
  var height = window.innerHeight;
  var clock = new THREE.Clock();

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2( 0xffffff, 0.05 );
  
  scene.add( player.model.objects );

  var camera = new THREE.PerspectiveCamera( 40, width / height, 1, 1000 );
  scene.add( camera );
  
  var light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.set(1, 1, 1 ).normalize();
  light.castShadow = true;
  scene.add( light );
  
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff, 1);
  renderer.setSize( width, height );
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;
  
  renderer.shadowMapEnabled = true;

  container.appendChild( renderer.domElement );

  animate();

/**
 * create field
 */

 
  

  var planeGeometry = new THREE.PlaneGeometry(1000,1000);
  var planeMaterial = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( '/images/bg.jpg' ), color: 0xffffff } );
  planeMaterial.map.repeat.x = 300;
  planeMaterial.map.repeat.y = 300;
  planeMaterial.map.wrapS = THREE.RepeatWrapping;
  planeMaterial.map.wrapT = THREE.RepeatWrapping;
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.castShadow = false;
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI / 2;
  scene.add( plane );
  

  var cube_info_org = socket_get_res(function(response){
    Cube_list = response.list;
    if(!Cube_list){console.log(false);}
    //user remove will in server  
    for( var i = 0; i < Cube_list.length; i++ ){
      if(Cube_list[i].username!=username){
        console.log(Cube_list[i].username);
        var color_string = "rgb("+Cube_list[i].colorR+","+Cube_list[i].colorG+","+Cube_list[i].colorB+")";
        Cube_Color_list[i] = new THREE.Color(color_string);
        //console.log(Cube_Color_list[i]);
        meshArray[ i ] = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: Cube_Color_list[i] } ) );
        meshArray[ i ].position.x = Cube_list[i].posX;
        meshArray[ i ].position.y = Cube_list[i].posY;
        meshArray[ i ].position.z = Cube_list[i].posZ;
        meshArray[ i ].castShadow = true;
        meshArray[ i ].receiveShadow = true;
        scene.add( meshArray[i] );
      }
    }

  });

//這裡是玩家的方塊    
    var player_color_string = "rgb("+player.color.r+","+player.color.g+","+player.color.b+")";
    var player_color = new THREE.Color(player_color_string);
    var q_geometry = new THREE.CubeGeometry( 1, 1, 1 );
    q_mesh= new THREE.Mesh( q_geometry, new THREE.MeshPhongMaterial( { color: player_color } ) );
    //q_mesh.castShadow = true;
    q_mesh.rotation.y = -Math.PI / 2;
    q_mesh.receiveShadow = true;

    player.model.objects.add( q_mesh );
    console.log(player.model.objects)

  
/**
 * move
 */
  var moveState = {
    moving    : false,
    front     : false,
    Backwards : false,
    left      : false,
    right     : false,
    speed     : .15,
    angle     : 0
  }

  function talk_user(){

    //socket_update_talk(talk_content_user);
  }
  
  function move(){

    var speed = moveState.speed;

    var direction = moveState.angle;
    if( moveState.front && !moveState.left && !moveState.Backwards && !moveState.right){direction +=   0}
    if( moveState.front &&  moveState.left && !moveState.Backwards && !moveState.right){direction +=  45}
    if(!moveState.front &&  moveState.left && !moveState.Backwards && !moveState.right){direction +=  90}
    if(!moveState.front &&  moveState.left &&  moveState.Backwards && !moveState.right){direction += 135}
    if(!moveState.front && !moveState.left &&  moveState.Backwards && !moveState.right){direction += 180}
    if(!moveState.front && !moveState.left &&  moveState.Backwards &&  moveState.right){direction += 225}
    if(!moveState.front && !moveState.left && !moveState.Backwards &&  moveState.right){direction += 270}
    if( moveState.front && !moveState.left && !moveState.Backwards &&  moveState.right){direction += 315}
    
    player.position.x -= Math.sin(direction * Math.PI / 180) * speed;
    player.position.z -= Math.cos(direction * Math.PI / 180) * speed;
    socket_update_user(player.position.x,player.position.z);
  }
  
  var timer;
  document.addEventListener('keydown', function(e){
    if( !/37|39|40|38/.test(e.keyCode)){ return }
    if( e.keyCode === 38 ){
      moveState.front     = true;
      moveState.Backwards = false;
    } else if ( e.keyCode === 40 ){
      moveState.Backwards = true;
      moveState.front     = false;
    } else if ( e.keyCode === 37 ){
      moveState.left  = true;
      moveState.right = false;
    } else if ( e.keyCode === 39 ){
      moveState.right = true;
      moveState.left  = false;
    }
    if(!moveState.moving){
      moveState.moving = true;
      move();
      timer = setInterval( function(){
        move();
      }, 1000 / 60);
    }
  }, false);
  
  document.addEventListener('keyup', function(e){
    if( !/37|39|40|38/.test(e.keyCode)){ return }
    if( e.keyCode === 38 ){
      moveState.front = false;
    } else if ( e.keyCode === 40 ){
      moveState.Backwards = false;
    } else if ( e.keyCode === 37 ){
      moveState.left = false;
    } else if ( e.keyCode === 39 ){
      moveState.right = false;
    }
    if(!moveState.front && !moveState.Backwards && !moveState.left && !moveState.right){
      moveState.moving = false;
      clearInterval(timer);
    }
  }, false);
  
  
  
  

  function clearCube(callback){
    var obj, i;
    for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
      obj = scene.children[ i ];
      if ( obj !== plane && obj !== camera && obj !== light && obj !== player.model.objects) {
        scene.remove(obj);
      if(i === 0){
        callback();
      }
      }
    }
  }

  function generateCube(){
    game_socket.on('list', function (data) {
      console.log(data);
      Cube_list = data.list;
      game_socket.emit('client event', { username: username });
    
      for( var i = 0; i < Cube_list.length; i++ ){
        if(Cube_list[i].username!=username){
          console.log(Cube_list[i].username);
          var color_string = "rgb("+Cube_list[i].colorR+","+Cube_list[i].colorG+","+Cube_list[i].colorB+")";
          Cube_Color_list[i] = new THREE.Color(color_string);
          //console.log(Cube_Color_list[i]);
          meshArray[ i ] = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: Cube_Color_list[i] } ) );
          meshArray[ i ].position.x = Cube_list[i].posX;
          meshArray[ i ].position.y = Cube_list[i].posY;
          meshArray[ i ].position.z = Cube_list[i].posZ;
          meshArray[ i ].castShadow = true;
          meshArray[ i ].receiveShadow = true;
          scene.add( meshArray[i] );
        }
      }
    });
  }

  function controlCube(){
    var game_socket = socket_get_res(function (data) {
      //console.log(data);
      Cube_list = data.list;
    
      for( var i = 0; i < Cube_list.length; i++ ){
        if(Cube_list[i].username!=username){
          //console.log(Cube_list[i].username+" move");
          meshArray[ i ].position.x = Cube_list[i].posX;
          meshArray[ i ].position.z = Cube_list[i].posZ;
        }
      }
    });
  }


/**
 * render
 */
  function animate(){
    requestAnimationFrame( animate );
    controlCube();
    //clearCube(generateCube());

    //Generate_other();
    
    player.model.objects.position.x = player.position.x;
    player.model.objects.position.y = player.position.y;
    player.model.objects.position.z = player.position.z;
    
    camera.position.x = player.position.x + player.camera.distance * Math.sin( (player.camera.x) * Math.PI / 360 );
    camera.position.z = player.position.z + player.camera.distance * Math.cos( (player.camera.x) * Math.PI / 360 );
    
 
    camera.position.y = player.position.y + player.camera.distance * Math.sin( (player.camera.y) * Math.PI / 360 );

    camera.position.y += 1;
    
    var vec3 = new THREE.Vector3( player.position.x,  player.position.y,  player.position.z)
    camera.lookAt( vec3 );

    renderer.render( scene, camera );
  }
}