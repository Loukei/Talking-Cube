//需要的js
//<script type="text/javascript" src="/javascripts/Three.js"></script>
//<script type="text/javascript" src="/javascripts/RequestAnimationFrame.js"></script>
//<script type="text/javascript" src="/javascripts/Detector.js"></script>
//<script type="text/javascript" src="/javascripts/Stats.js"></script>

// ## Now lets start

// declare a bunch of variable we will need later
var startTime	= Date.now();
var container;
var camera, scene, renderer, stats;
var light;
var cube = null;
var cube2;

var cube_info = {
	pos: {
		x:0,
		y:0,
		z:0
	}
};

// ## bootstrap functions
// initialiaze everything
init();
// make it move			
animate();

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
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	

	//===================場景=====================================
	scene = new THREE.Scene();

	//add plane
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshNormalMaterial());
	plane.overdraw = true;
    scene.add(plane);

	//===================cube==================================
	cube = new THREE.Mesh( 
		//cube的長,寬,高
		new THREE.CubeGeometry( 20, 20, 20 ), 
		//處理貼圖
		//new THREE.MeshPhongMaterial( { color: 0xFFFF50 } )
		new THREE.MeshLambertMaterial({color: 0xFFFF50 })
		//new THREE.MeshNormalMaterial()
	);
	//設定cube的位置
	cube.position.x = cube_info.pos.x;
	cube.position.y = cube_info.pos.y;
	cube.position.z = cube_info.pos.z;
	// 將cube加入場景
	scene.add( cube );
	//cube.addObject( camera );
	cube.add( camera );
	camera.position.set(0,50,100);

	//=======================cube2====================
	
	cube2 = new THREE.Mesh( 
		new THREE.CubeGeometry( 20, 20, 20 ), 
		new THREE.MeshLambertMaterial({color: 0xFFFF50 })
	);
	//設定cube的位置
	cube2.position.x = 10;
	cube2.position.y = 0;
	cube2.position.z = 0;
	// 將cube加入場景
	scene.add( cube2 );
	
	//light
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLight.position.set( 0, 1, 1 );
	scene.add( directionalLight );

	// ==================監看fps的小工具====================
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );
}

// ## Animate and Display the Scene
function animate() {
	
	// relaunch the 'timer' 
	requestAnimationFrame( animate );
	// render the 3D scene
	render();
	//玩家移動
	playerMovement();
	// update the stats
	stats.update();
}


// ## 設定物體位置，渲染3D場景
function render() {
	
	//cube.rotation.y += 0.0225;
	//cube.rotation.z += 0.0175;
	//camera.position.set(cube.position.x,cube.position.y,100);
	//var look = new THREE.Vector3( cube.position.x,cube.position.y,150 );
	//camera.lookAt(look);
	//camera.lookAt( cube.position );
	camera.lookAt( cube.position );

    renderer.render( scene, camera );
}

function playerMovement(){
        if (Key.isDown(Key.A)){		//左
        	cube.position.x -= 1;
        }
        else if (Key.isDown(Key.D)){//右
        	cube.position.x += 1;
        }
        else if (Key.isDown(Key.W)){//上
        	cube.position.z += 1;
        }
        else if (Key.isDown(Key.S)){//下
        	cube.position.z -= 1;
        }

}