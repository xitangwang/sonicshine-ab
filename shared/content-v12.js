(() => {
  'use strict';
  const zh=document.documentElement.lang.startsWith('zh'),filter=document.querySelector('.v12-filters');
  if(filter){
    const buttons=[...filter.querySelectorAll('[data-category]')],articles=[...document.querySelectorAll('[data-article-category]')],status=document.querySelector('.v12-filter-status');
    function select(category,write=false){if(!buttons.some(b=>b.dataset.category===category))category='all';buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));let n=0;articles.forEach(a=>{a.hidden=category!=='all'&&a.dataset.articleCategory!==category;if(!a.hidden)n++;});status.textContent=zh?'共 '+n+' 篇文章':n+' article'+(n===1?'':'s');if(write){const url=new URL(location.href);if(category==='all')url.searchParams.delete('category');else url.searchParams.set('category',category);history.replaceState(null,'',url);}}
    buttons.forEach(b=>b.addEventListener('click',()=>select(b.dataset.category,true)));select(new URL(location.href).searchParams.get('category')||'all');
  }
  const header=document.querySelector('header.top');if(header){function offset(){document.documentElement.style.scrollPaddingTop=(header.getBoundingClientRect().height+24)+'px';}offset();new ResizeObserver(offset).observe(header);}
})();
