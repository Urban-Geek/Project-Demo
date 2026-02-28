/* ============================================================
   NEWSLETTER.JS
   NM Special Ed Newsletter — Issue 1, February 2026
   Handles: Floating stars + Scroll-in animations
============================================================ */

// ── Floating Stars & Emojis ──────────────────────────────────
const EMOJIS = [
  "⭐",
  "🌟",
  "✨",
  "💫",
  "🌵",
  "🌞",
  "🎈",
  "💛",
  "🌈",
  "🎉",
  "🤝",
  "💕",
  "🧩",
];
const starZone = document.getElementById("starsContainer");

function createStar() {
  const el = document.createElement("span");
  el.classList.add("star");
  el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

  const size = (0.8 + Math.random() * 1.4).toFixed(2); // 0.8–2.2rem
  const left = (Math.random() * 100).toFixed(2); // 0–100%
  const dur = (9 + Math.random() * 14).toFixed(1); // 9–23s
  const delay = -(Math.random() * parseFloat(dur)); // pre-stagger

  el.style.cssText = `
    left: ${left}%;
    font-size: ${size}rem;
    animation-duration: ${dur}s;
    animation-delay: ${delay}s;
  `;

  starZone.appendChild(el);
}

// Spawn 24 floating elements
for (let i = 0; i < 24; i++) createStar();

// ── Scroll-Triggered Slide-In ────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.1 }, // trigger when 10% of section is visible
);

// Watch every element with .animate-in
document.querySelectorAll(".animate-in").forEach((el) => observer.observe(el));
