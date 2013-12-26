//需要的js
//<script type="text/javascript" src="/javascripts/Three.js"></script>
//<script type="text/javascript" src="/javascripts/RequestAnimationFrame.js"></script>
//<script type="text/javascript" src="/javascripts/Detector.js"></script>
//<script type="text/javascript" src="/javascripts/Stats.js"></script>

// ## Now lets start


console.log('test.js');

// declare a bunch of variable we will need later
var startTime = Date.now();
var container;
var camera, scene, renderer, stats;
var light;

console.log(username);

//all users list
var cube_list;

function socket_get_res (callback){
	socket.get('/game/all',{
	  message: username
	}, function (response) {
	  // response === {success: true, message: 'hi there!'}
	  //console.log(response);
	  callback(response);
	});
}

// initialiaze everything
init();

var cube_info_org = socket_get_res(function(response){

	cube_list = response.list;
	console.log(response.list);

	// make it move			
	animate();

});

// ## Initialize everything
function init() {
	// test if webgl is supported
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	//===============container element=========================
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	//====================渲染器================================
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	//===================相機=====================================
	camera = new THREE.Camera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set(0,0,25);

	//===================場景=====================================
	//scene = new THREE.Scene();
	
	// ==================監看fps的小工具====================
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );
}

// ## Animate and Display the Scene
function animate() {

	scene = new THREE.Scene();

	//產生所有的user
	for(var i = 0; i < cube_list.length ; i++){
		GenerateCube(cube_list[i].posX,cube_list[i].posY,cube_list[i].posZ,cube_list[i].color);
	}

	//
	//camera.position.set(cube_list[2].posX,cube_list[2].posY,25);

	// renderer.render( scene, camera )
	render();

	// relaunch the 'timer' 
	requestAnimationFrame( animate );

	//玩家移動
	//playerMovement(cube_info.posX,cube_info.posY,cube_info.posZ);

	// update the stats
	stats.update();
}

// ##依據輸入的位置跟顏色產生cube並加入scene
function GenerateCube(posX,posY,posZ,Cubecolor){

	var cube;
	cube = new THREE.Mesh( 
		//cube的長,寬,高
		new THREE.CubeGeometry( 2, 2, 2 ), 
		//處理貼圖
		new THREE.MeshLambertMaterial({color: Cubecolor })
	);

	//設定cube的位置
	cube.position.x = posX;
	cube.position.y = posY;
	cube.position.z = posZ;
	// 將cube加入場景
	scene.add( cube );
}

// ## 渲染3D場景
function render() {
	renderer.render( scene, camera );
}

// ##玩家自身移動
function playerMovement(posX,posY,posZ){
        if (Key.isDown(Key.A)){		//左
        	cube_list[Hostid].posX -= 1;
        }
        else if (Key.isDown(Key.D)){//右
        	cube_list[Hostid].posX += 1;
        }
        else if (Key.isDown(Key.W)){//上
        	cube_list[Hostid].posY += 1;
        }
        else if (Key.isDown(Key.S)){//下
        	cube_list[Hostid].posY -= 1;
        }

        //回傳player自身資訊
}

