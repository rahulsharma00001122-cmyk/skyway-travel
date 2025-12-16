// HERO IMAGE SLIDER
const heroImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
];
let current = 0;
const heroSection = document.querySelector(".hero");
setInterval(() => {
  current = (current + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url('${heroImages[current]}')`;
}, 4000);

// FLIGHT SEARCH
const form = document.getElementById("flightForm");
const loading = document.getElementById("loading");
const results = document.getElementById("results");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  results.classList.add("hidden");
  loading.classList.remove("hidden");
  setTimeout(() => {
    loading.classList.add("hidden");
    results.classList.remove("hidden");
  }, 2500);
});

// LOGIN / SIGNUP MODAL
const modal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");
const switchAuth = document.getElementById("switchAuth");
const modalTitle = document.getElementById("modalTitle");
const authForm = document.getElementById("authForm");

document.querySelector(".logo").addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
switchAuth.addEventListener("click", () => {
  if(modalTitle.innerText === "Login") {
    modalTitle.innerText = "Sign Up";
    authForm.querySelector("button").innerText = "Sign Up";
    switchAuth.innerText = "Login";
  } else {
    modalTitle.innerText = "Login";
    authForm.querySelector("button").innerText = "Login";
    switchAuth.innerText = "Sign Up";
  }
});

// DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// STICKY HEADER
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 10);
});
