/* Reuse B's real page destinations within the refined A-style direction. */
(() => {
  'use strict';
  if(window.SonicNavigation?.b){
    const n=JSON.parse(JSON.stringify(window.SonicNavigation.b));
    const compare={label:['Compare four system families','对比四类设备架构'],desc:['Review process stages, handling and project inputs.','对照工序、搬运方式与项目输入。'],url:'compare.html'};
    const p=n.products.rows.findIndex(x=>x.url==='@catalog');n.products.rows.splice(p<0?n.products.rows.length:p,0,compare);
    n.products.feature={label:['Choose a system around your part.','围绕工件选择设备架构。'],cta:['Compare systems','对比设备'],url:'compare.html',img:'@machine'};
    window.SonicNavigation.ab=n;
  }
  if(window.SonicTopIndex?.b){
    const zh=document.documentElement.lang.startsWith('zh');
    window.SonicTopIndex.ab=[...window.SonicTopIndex.b.map(p=>p.url==='about.html'?{...p,title:zh?'从工件需求，到设备方案。':'From your part to the right process.',description:zh?'项目准备、试洗规划与设备支持。':'Project preparation, trial planning and equipment support.'}:p),{url:'compare.html',title:zh?'对比四类清洗设备':'Compare four cleaning system families',type:zh?'设备选型':'Equipment selection',keywords:zh?'对比 单槽 多槽 辅助 升降 自动 设备':'compare comparison single multi assisted automated lifting',description:zh?'对照工艺路径、工件搬运及现场规划要求。':'Compare process routes, workpiece handling and site planning inputs.'}];
  }
})();
