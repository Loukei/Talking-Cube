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
  chat: ""
}

var myAPP = angular.module('myAPP',[]);



var meshArray = [];
var Cube_list;
var Cube_list_chat = [];
var Cube_Color_list = [];
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var url = window.location.href;
var arr = url.split("/");
var arr_2 = arr[2].split(":");
//console.log(arr_2);

var tag_canvas = [];
var tag_context = [];


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
      chat: talk_content
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
player.chat = chat;

init();

function init(){

  myAPP.controller('getchat', ['$scope', function($scope) {
    $scope.chatPush = function() {
      player.chat = $scope.chatCrtl;
      var talk_to_server = socket_update_talk(player.chat);
      var angular_chat = changeTextSprite( 0, username,username+":"+player.chat  ,{ 
        fontsize: 50,
        borderColor: {r:100, g:100, b:100, a:1.0},
        backgroundColor: {r:200, g:200, b:200, a:0.8}
      });
    };
  }]);

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
        //console.log(Cube_list[i].chat);
        var color_string = "rgb("+Cube_list[i].colorR+","+Cube_list[i].colorG+","+Cube_list[i].colorB+")";
        Cube_Color_list[i] = new THREE.Color(color_string);
        //console.log(Cube_Color_list[i]);
        meshArray[ i ] = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: Cube_Color_list[i] } ) );
        meshArray[ i ].position.x = Cube_list[i].posX;
        meshArray[ i ].position.y = Cube_list[i].posY;
        meshArray[ i ].position.z = Cube_list[i].posZ;
        meshArray[ i ].castShadow = true;
        meshArray[ i ].receiveShadow = true;
        

        //=========================
        Cube_list_chat[i] = makeTextSprite( i+1,Cube_list[i].username, Cube_list[i].username+":"+Cube_list[i].chat ,{ 
          fontsize: 50,
          borderColor: {r:100, g:100, b:100, a:1.0},
          backgroundColor: {r:200, g:200, b:200, a:0.8}
        });
        Cube_list_chat[i].position.set(0,1,0);
        meshArray[i].add(Cube_list_chat[i]);
        //==========================

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

    var spritey = makeTextSprite(0, username,username+":"+player.chat ,{ 
      fontsize: 50,
      borderColor: {r:100, g:100, b:100, a:1.0},
      backgroundColor: {r:200, g:200, b:200, a:0.8}
    });
    spritey.position.set(0,1,0);
    //console.log(spritey);
    q_mesh.add(spritey);

    player.model.objects.add( q_mesh );
    //console.log(player.model.objects)

  
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

  

  function makeTextSprite( i, username, message, parameters )
  {
    if ( parameters === undefined ) parameters = {};
    
    var fontface = parameters.hasOwnProperty("fontface") ? 
      parameters["fontface"] : "Arial";
    
    var fontsize = parameters.hasOwnProperty("fontsize") ? 
      parameters["fontsize"] : 18;
    
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
      parameters["borderThickness"] : 4;
    
    var borderColor = parameters.hasOwnProperty("borderColor") ?
      parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
      parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

    //var spriteAlignment = THREE.SpriteAlignment.topLeft;
      
    tag_canvas[i] = document.createElement('canvas');
    //tag_canvas[i].setAttribute("id", username+"_canvas");
    tag_context[i] = tag_canvas[i].getContext('2d');
    tag_context[i].font = "Bold " + fontsize + "px " + fontface;
      
    // get size data (height depends only on font size)
    var metrics = tag_context[i].measureText( message );
    var textWidth = metrics.width;
    
    // background color
    tag_context[i].fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
                    + backgroundColor.b + "," + backgroundColor.a + ")";
    // border color
    tag_context[i].strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
                    + borderColor.b + "," + borderColor.a + ")";

    tag_context[i].lineWidth = borderThickness;
    roundRect(tag_context[i], borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
    // 1.4 is extra height factor for text below baseline: g,j,p,q.
    
    // text color
    tag_context[i].fillStyle = "rgba(0, 0, 0, 1.0)";

    tag_context[i].fillText( message, borderThickness, fontsize + borderThickness);
    
    // canvas contents will be used for a texture
    var texture = new THREE.Texture(tag_canvas[i]) 
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial( 
      { map: texture } );
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(1,1,1);
    console.log(sprite);
    return sprite;  
  }

  function roundRect(ctx, x, y, w, h, r) 
  {
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();   
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
  
  
  
  

  function clearCube(){
    var obj, i;
    for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
      obj = scene.children[ i ];
      if ( obj !== plane && obj !== camera && obj !== light && obj !== player.model.objects ) {
        scene.remove(obj);
      if(i < 0){
        generateCube();
      }
      }
    }
  }

  function generateCube(){
    var cube_info_org = socket_get_res(function(response){
      Cube_list = response.list;
      if(!Cube_list){console.log(false);}
      //user remove will in server  
      for( var i = 0; i < Cube_list.length; i++ ){
        if(Cube_list[i].username!=username){
          //console.log(Cube_list[i].chat);
          var color_string = "rgb("+Cube_list[i].colorR+","+Cube_list[i].colorG+","+Cube_list[i].colorB+")";
          Cube_Color_list[i] = new THREE.Color(color_string);
          //console.log(Cube_Color_list[i]);
          meshArray[ i ] = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: Cube_Color_list[i] } ) );
          meshArray[ i ].position.x = Cube_list[i].posX;
          meshArray[ i ].position.y = Cube_list[i].posY;
          meshArray[ i ].position.z = Cube_list[i].posZ;
          meshArray[ i ].castShadow = true;
          meshArray[ i ].receiveShadow = true;
          

          //=========================
          Cube_list_chat[i] = makeTextSprite( Cube_list[i].chat ,{ 
            fontsize: 50,
            borderColor: {r:100, g:100, b:100, a:1.0},
            backgroundColor: {r:200, g:200, b:200, a:0.8}
          });
          Cube_list_chat[i].position.set(0,1,0);
          meshArray[i].add(Cube_list_chat[i]);
          //==========================

          scene.add( meshArray[i] );
        }
      }

    });
    }

  function changeTextSprite( i, username, message, parameters )
  {
    tag_context[i].clearRect(0, 0, tag_canvas[i].width, tag_canvas[i].height);

    if ( parameters === undefined ) parameters = {};
    
    var fontface = parameters.hasOwnProperty("fontface") ? 
      parameters["fontface"] : "Arial";
    
    var fontsize = parameters.hasOwnProperty("fontsize") ? 
      parameters["fontsize"] : 18;
    
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
      parameters["borderThickness"] : 4;
    
    var borderColor = parameters.hasOwnProperty("borderColor") ?
      parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
      parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

    //var spriteAlignment = THREE.SpriteAlignment.topLeft;
      
    tag_context[i].font = "Bold " + fontsize + "px " + fontface;
      
    // get size data (height depends only on font size)
    var metrics = tag_context[i].measureText( message );
    var textWidth = metrics.width;
    
    // background color
    tag_context[i].fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
                    + backgroundColor.b + "," + backgroundColor.a + ")";
    // border color
    tag_context[i].strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
                    + borderColor.b + "," + borderColor.a + ")";

    tag_context[i].lineWidth = borderThickness;
    roundRect(tag_context[i], borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
    // 1.4 is extra height factor for text below baseline: g,j,p,q.
    
    // text color
    tag_context[i].fillStyle = "rgba(0, 0, 0, 1.0)";

    tag_context[i].fillText( message, borderThickness, fontsize + borderThickness);
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
          Cube_list_chat[i] = changeTextSprite( i+1,Cube_list[i].username, Cube_list[i].username+":"+Cube_list[i].chat ,{ 
            fontsize: 50,
            borderColor: {r:100, g:100, b:100, a:1.0},
            backgroundColor: {r:200, g:200, b:200, a:0.8}
          });
        }
      }
    });
  }

  function reloadelement(){
    clearCube();
    console.log("exec");
  }

  //setInterval(reloadelement,500);


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