// Лаб 6-ийн theme, flip логикийг хадгалсан. Лаб 8-ийн form validation нэмсэн.
const root=document.documentElement; const themeBtn=document.getElementById('themeBtn');
const bootstrap=root.hasAttribute('data-bs-theme'); const themeAttr=bootstrap?'data-bs-theme':'data-theme';
function readSavedTheme(){try{return localStorage.getItem('theme')}catch(e){return null}}
function saveTheme(v){try{localStorage.setItem('theme',v)}catch(e){}}
function applyTheme(theme){root.setAttribute(themeAttr,theme);root.dataset.theme=theme;themeBtn.setAttribute('aria-pressed',String(theme==='dark'));themeBtn.textContent=theme==='dark'?'☀ Цайвар':'🌙 Харанхуй';}
const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(readSavedTheme()||(prefersDark?'dark':'light'));
themeBtn.addEventListener('click',()=>{const next=root.getAttribute(themeAttr)==='dark'?'light':'dark';applyTheme(next);saveTheme(next)});
document.querySelectorAll('.flip').forEach(card=>card.addEventListener('click',()=>{const flipped=card.classList.toggle('is-flipped');card.setAttribute('aria-pressed',String(flipped))}));
document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(bootstrap)form.classList.add('was-validated');if(!form.checkValidity()){if(!bootstrap)form.reportValidity();return;}form.querySelector('.form-result').textContent='✅ Формын шалгалт амжилттай (демо).';}));
