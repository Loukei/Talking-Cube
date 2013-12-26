// This source is the javascript needed to build a simple moving
// cube in **three.js** based on this
// [example](https://raw.github.com/mrdoob/three.js/r44/examples/canvas_geometry_cube.html)
// It is the source about this [blog post](/blog/2011/08/06/lets-do-a-cube/).

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

	//相機
	camera = new THREE.Camera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 350;

	//場景
	scene = new THREE.Scene();

	//產生平行光照向原點
	//light = new THREE.Directionalight( 0xffffff,1.5);
	//light.position.set(0,0,3);
	//scene.addObject( light );

	//產生cube
	//THREE.Mesh(geometry,meterial)
	//cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );
	cube = new THREE.Mesh( 
		//cube的長,寬,高
		new THREE.CubeGeometry( 20, 20, 20 ), 
		//處理貼圖
		//new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } )
		//new THREE.MeshLambertMaterial({color: 0x28c0ec })
		new THREE.MeshNormalMaterial()
	);

	//設定cube的位置
	cube.position.x = cube_info.pos.x;
	cube.position.y = cube_info.pos.y;
	cube.position.z = cube_info.pos.z;

	// 將cube加入場景
	scene.addObject( cube );

	// create the container element
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// init the WebGL renderer and append it to the Dom
	//產生webGL渲染器並加入到comtainer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	
	// 產生一個監看fps的小工具 - performance vuemeter
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );
}

// ## Animate and Display the Scene
function animate() {
	// render the 3D scene
	render();
	// relaunch the 'timer' 
	requestAnimationFrame( animate );
	// update the stats
	stats.update();
}


// ## 設定物體位置，渲染3D場景
function render() {
	//cube的轉量
	//cube.rotation.x += 0.02;
	cube.rotation.y += 0.0225;
	cube.rotation.z += 0.0175;

	//cube的位置
	cube.position.x = cube_info.pos.x;
	cube.position.y = cube_info.pos.y;
	cube.position.z = cube_info.pos.z;

	//令cube伸縮
	//var dtime	= Date.now() - startTime;//隨著時間變動
	//cube.scale.x	= 1.0 + 0.3*Math.sin(dtime/300);
	//cube.scale.y	= 1.0 + 0.3*Math.sin(dtime/300);
	//cube.scale.z	= 1.0 + 0.3*Math.sin(dtime/300);

	// actually display the scene in the Dom element

	renderer.render( scene, camera );
}
