// ===== 1. Dark mode (theme) товч =====
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

// localStorage ажиллахгүй байж болох тул try/catch-тай
function readSavedTheme() {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
}
function saveTheme(value) {
  try { localStorage.setItem("theme", value); } catch (e) { /* алгасна */ }
}

function applyTheme(theme) {
  root.dataset.theme = theme;                       // CSS-ийн :root[data-theme="dark"]
  themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  themeBtn.textContent = theme === "dark" ? "☀ Цайвар" : "🌙 Харанхуй";
}

// Эхлээд хадгалсан сонголт, байхгүй бол төхөөрөмжийн тохиргоо
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(readSavedTheme() || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
});

// ===== 2. Flip card: дарахад эргэнэ =====
document.querySelectorAll(".flip").forEach((card) => {
  card.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  });
});