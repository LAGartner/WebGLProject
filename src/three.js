
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const blueCurve = new THREE.EllipseCurve(
  5,  0,            // ax, aY
  0.5, 1,           // xRadius, yRadius
  0,  2 * Math.PI,  // aStartAngle, aEndAngle
  false,            // aClockwise
  0                 // aRotation
);

const orangeCurve = new THREE.EllipseCurve(
  -5,  0,           // ax, aY
  0.5, 1,           // xRadius, yRadius
  0,  2 * Math.PI,  // aStartAngle, aEndAngle
  false,            // aClockwise
  0                 // aRotation
);

const bluePoints = blueCurve.getPoints( 50 );
const bluePortalGeometry = new THREE.BufferGeometry().setFromPoints(bluePoints);
const blueMaterial = new THREE.LineBasicMaterial( { color : 0x30d5c8 } );
const bluePortal = new THREE.Line(bluePortalGeometry, blueMaterial);
scene.add(bluePortal);

const orangePoints = orangeCurve.getPoints( 50 );
const orangePortalGeometry = new THREE.BufferGeometry().setFromPoints(orangePoints);
const orangeMaterial = new THREE.LineBasicMaterial( { color : 0xffa500 } );
const orangePortal = new THREE.Line(orangePortalGeometry, orangeMaterial);
scene.add(orangePortal);

const buttonGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
const redMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const button = new THREE.Mesh(buttonGeometry, redMaterial);
button.position.y = 3;
scene.add(button);

const torreGeometry = new THREE.BoxGeometry(1, 2, 1);
const whiteMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const torre = new THREE.Mesh(torreGeometry, whiteMaterial);
torre.rotation.x = 0.5;
scene.add(torre);

const cubeGeometry = new THREE.BoxGeometry();
const greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(cubeGeometry, greenMaterial);
cube.position.y = -3;
scene.add(cube);

camera.position.z = 10;

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
