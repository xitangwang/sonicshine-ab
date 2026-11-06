/* A's navigation shell, isolated from the two original concepts' page logic. */
(() => {
  'use strict';
  const toggle=document.querySelector('.mobile-toggle'),nav=document.querySelector('.navlinks');
  if(!toggle||!nav)return;
  const zh=document.documentElement.lang.startsWith('zh');
  const set=show=>{nav.classList.toggle('open',show);toggle.setAttribute('aria-expanded',String(show));toggle.textContent=show?(zh?'关闭':'Close'):(zh?'菜单':'Menu');};
  toggle.addEventListener('click',()=>set(!nav.classList.contains('open')));
  document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!toggle.contains(e.target))set(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){set(false);toggle.focus();}});
})();
