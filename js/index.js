// variable
let camera, scene, renderer;
let clock, mesh;
let aspectRatio = 70;
let fieldOfView = window.innerWidth / window.innerHeight;
let nearPlane = 0.01;
let farPlane = 20;
var hemisphereLight;

//setting up camera
camera = new THREE.PerspectiveCamera(aspectRatio, fieldOfView, nearPlane, farPlane);
camera.position.set(0, 2, 4);

//creating scene
scene = new THREE.Scene();

clock = new THREE.Clock();

//ground
var texture7 = new THREE.TextureLoader().load("image/grassBrick.jpg");
var groundGeometry = new THREE.BoxGeometry(20, 20, 0.1);
var groundMaterial = new THREE.MeshBasicMaterial({
  map: texture7,
  emissive: 0x333333,
});
var ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = Math.PI / 2;
ground.position.y = -0.55;
scene.add(ground);
//end of ground

//creatinh helicopter wing
//for wing1
var texture6 = new THREE.TextureLoader().load("image/wing.jpg");
wingRot1 = wingRotation1();
function wingRotation1() {
  var geometry3 = new THREE.BoxGeometry(1.7, 0.01, 0.1);
  var material3 = new THREE.MeshBasicMaterial({
    map: texture6,
    emissive: 0x333333,
  });
  var wing1 = new THREE.Mesh(geometry3, material3);
  return wing1;
}
wingRot1.position.y = 2.3;
scene.add(wingRot1);

//for wing2
wingRot2 = wingRotation2();
function wingRotation2() {
  var geometry4 = new THREE.BoxGeometry(1.7, 0.01, 0.1);
  var material4 = new THREE.MeshBasicMaterial({
    map: texture6,
    emissive: 0x333333,
  });
  var wing2 = new THREE.Mesh(geometry4, material4);
  return wing2;
}
wingRot2.position.y = 2.3;
wingRot2.rotation.y = Math.PI / 2;
scene.add(wingRot2);

//creating helicopter
mesh = createHelicopter();
mesh.position.x = 0;
mesh.position.z = 0;
mesh.position.y = 1;
scene.add(mesh);

//function for creating helicopter
function createHelicopter() {
  const helicopter = new THREE.Group();

  //creating main body
  var geometry = new THREE.SphereGeometry(1, 64, 32);
  var texture1 = new THREE.TextureLoader().load("image/helibody.jpg");
  var material = new THREE.MeshPhongMaterial({
    map: texture1,
    emissive: 0x333333,
  });
  var mainBody = new THREE.Mesh(geometry, material);
  helicopter.add(mainBody);

  //creating neck
  var texture5 = new THREE.TextureLoader().load("image/neck.jpg");
  var geometry1 = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 40);
  var material1 = new THREE.MeshPhongMaterial({
    map: texture5,
    emissive: 0x333333,
  });
  var neck = new THREE.Mesh(geometry1, material1);
  neck.position.y = 1;
  helicopter.add(neck);

  //creating tail
  var geometry2 = new THREE.BoxGeometry(3, 0.05, 0.2);
  var material2 = new THREE.MeshPhongMaterial({
    map: texture1,
    emissive: 0x333333,
  });
  var tail = new THREE.Mesh(geometry2, material2);
  tail.position.x = 1;
  helicopter.add(tail);

  // making a light
  var geometry5 = new THREE.CylinderGeometry(0.15, 0.05, 0.55, 40);
  var texture3 = new THREE.TextureLoader().load("image/gold.jpg");
  var material5 = new THREE.MeshPhongMaterial({
    map: texture3,
    emissive: 0x333333,
  });
  var lightObj = new THREE.Mesh(geometry5, material5);
  lightObj.position.x = -0.97;
  lightObj.rotation.z = Math.PI / 2;
  helicopter.add(lightObj);

  //making a tail pointer
  var geometry6 = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  var material6 = new THREE.MeshPhongMaterial({
    map: texture1,
    emissive: 0x333333,
  });
  var tailPointer = new THREE.Mesh(geometry6, material6);
  tailPointer.position.x = 2.6;
  tailPointer.position.y = 0.07;
  helicopter.add(tailPointer);

  //making helicopter below parts
  var geometry7 = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 40);
  var texture2 = new THREE.TextureLoader().load("image/below.jpg");
  var material7 = new THREE.MeshPhongMaterial({
    map: texture2,
    emissive: 0x333333,
  });
  var st1 = new THREE.Mesh(geometry7, material7);
  st1.position.x = 0.4;
  st1.position.y = -1;
  st1.position.z = 0.4;
  helicopter.add(st1);

  var geometry8 = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 40);
  var material8 = new THREE.MeshPhongMaterial({
    map: texture2,
    emissive: 0x333333,
  });
  var st2 = new THREE.Mesh(geometry8, material8);
  st2.position.x = 0.4;
  st2.position.y = -1;
  st2.position.z = -0.4;
  helicopter.add(st2);

  var geometry9 = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 40);
  var material9 = new THREE.MeshPhongMaterial({
    map: texture2,
    emissive: 0x333333,
  });
  var st3 = new THREE.Mesh(geometry9, material9);
  st3.position.x = -0.4;
  st3.position.y = -1;
  st3.position.z = -0.4;
  helicopter.add(st3);

  var geometry10 = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 40);
  var material10 = new THREE.MeshPhongMaterial({
    map: texture2,
    emissive: 0x333333,
  });
  var st4 = new THREE.Mesh(geometry10, material10);
  st4.position.x = -0.4;
  st4.position.y = -1;
  st4.position.z = 0.4;
  helicopter.add(st4);

  var texture4 = new THREE.TextureLoader().load("image/below1.jpg");
  var geometry11 = new THREE.CapsuleGeometry(0.08, 2, 10, 20);
  var material11 = new THREE.MeshPhongMaterial({
    map: texture4,
    emissive: 0x333333,
  });
  var ut1 = new THREE.Mesh(geometry11, material11);
  ut1.position.x = 0;
  ut1.position.y = -1.3;
  ut1.position.z = 0.4;
  ut1.rotation.z = Math.PI / 2;
  helicopter.add(ut1);

  var geometry12 = new THREE.CapsuleGeometry(0.08, 2, 10, 20);
  var material12 = new THREE.MeshPhongMaterial({
    map: texture4,
    emissive: 0x333333,
  });
  var ut2 = new THREE.Mesh(geometry12, material12);
  ut2.position.x = 0;
  ut2.position.y = -1.3;
  ut2.position.z = -0.4;
  ut2.rotation.z = Math.PI / 2;
  helicopter.add(ut2);

  return helicopter;
}

//end fo helicopter

// gridHelper
// gHelper = new THREE.GridHelper();
// scene.add(gHelper);

mesh.add(camera);

//adding hemispatial light
hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.3);
scene.add(hemisphereLight);

//adding light and rotete it with mousemove
shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(shadowLight);
camera.position.z = 4;
camera.position.x = 2;
camera.lookAt(mesh.position);
shadowLight.position.copy(camera.position);

window.addEventListener("resize", resize, false);
var resize = function () {
  width = window.innerWidth;
  height = window.innerHeight;

  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = 0;
renderer.domElement.style.left = 0;

document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  document.addEventListener("keypress", rotateCamera);
  document.addEventListener("mousemove", rotateLight);

  function rotateCamera() {
    const time = clock.getElapsedTime();
    mesh.position.x = 0;
    mesh.position.z = 0;

    camera.position.x = Math.sin(time) * 4;
    camera.position.z = Math.cos(time) * 4;
  }

  function rotateLight() {
    mesh.position.x = 0;
    mesh.position.z = 0;
    shadowLight.position.x = 458 * Math.sin(Date.now() / 240);
    shadowLight.position.z = 458 * Math.cos(Date.now() / 240);
  }
  // mesh.rotation.y += 0.01;
  wingRot1.rotation.y += 0.9;
  wingRot2.rotation.y += 0.9;
  camera.lookAt(mesh.position);
  renderer.render(scene, camera);
}

animate();
