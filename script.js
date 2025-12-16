// =======================
// 3D BACKGROUND
// =======================
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / (window.innerHeight * 0.65),
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight * 0.65);
camera.position.z = 5;

// Airplane
const planeGeometry = new THREE.ConeGeometry(0.3, 1, 32);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

// Globe
const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
const globeMaterial = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0x1e90ff
});
const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.001;
  plane.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight * 0.65);
  camera.aspect = window.innerWidth / (window.innerHeight * 0.65);
  camera.updateProjectionMatrix();
});

// =======================
// WHATSAPP AUTO BOOKING
// =======================
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  // 🔴 CHANGE THIS NUMBER TO YOUR WHATSAPP NUMBER
  const phoneNumber = "1234567890"; // without + or spaces

  const message =
    `✈ Flight Booking Request%0A%0A` +
    `From: ${from}%0A` +
    `To: ${to}%0A` +
    `Date: ${date}%0A` +
    `Passengers: ${passengers}`;

  const whatsappURL = `https://wa.me/${+234 911 180 1111}?text=${message}`;

  window.open(whatsappURL, "_blank");
});

