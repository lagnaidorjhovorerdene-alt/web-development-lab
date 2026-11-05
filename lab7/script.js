(function () {
  'use strict';

  /* ===== Dark mode (design token солих) ===== */
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-btn');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.textContent = dark ? '☀️ Light' : '🌙 Dark';
  }

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ===== 3D flip card ===== */
  document.querySelectorAll('.card').forEach(function (card) {
    var btn = card.querySelector('.card__btn');
    function toggle() {
      var flipped = card.classList.toggle('card--flipped');
      btn.setAttribute('aria-pressed', String(flipped));
      btn.textContent = flipped ? 'Буцаах' : 'Эргүүлэх';
    }
    btn.addEventListener('click', toggle);
    card.querySelector('.card__inner').addEventListener('click', toggle);
  });

  /* ===== Гар утасны цэс: линк дарахад / Esc дарахад хаах ===== */
  var menuCheck = document.getElementById('menu-check');
  document.querySelectorAll('.site-header__link').forEach(function (link) {
    link.addEventListener('click', function () { menuCheck.checked = false; });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { menuCheck.checked = false; }
  });
})();
