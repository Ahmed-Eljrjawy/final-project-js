(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const b=document.querySelector(".modeButton"),u=document.querySelector("body");document.querySelector(".container");document.querySelector(".infoFilter--mobile");const v=document.querySelector(".submit"),p=document.querySelector(".input"),g=document.querySelector(".taskList"),f=document.querySelector(".dragDrop");document.querySelector(".numberOfTasks");const h=()=>document.querySelectorAll(".cross"),m=()=>document.querySelectorAll(".checkbox"),L=()=>document.querySelectorAll(".filterButton"),S=()=>document.querySelectorAll(".filterButtonPop"),E=()=>document.querySelector(".clearCompleted"),y=()=>{u.classList.toggle("darkIsActive"),a("darkmodeFlag",u.classList.contains("darkIsActive"))};b.addEventListener("click",y);const C=(e,t)=>{const s=r("tasks");s[t].isComplete=!s[t].isComplete,e.currentTarget.parentElement.classList.toggle("taskList--isActive"),a("tasks",s),l()},q=e=>{const t=r("tasks");t.splice(e,1),a("tasks",t),l()},r=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):[]},i=e=>{let t="";e.forEach(c=>{t+=`<li class="task ${c.isComplete?" taskList--isActive":""}">
    <!--taskList--isActive -->
    <button class=" checkbox square">
    <img class="checkMark" src="images/icon-check.svg" alt="" />
    </button>
    <p class="taskContent">${c.value}</p>
    <button class="cross">
    <img src="images/icon-cross.svg" alt="" />
    </button>
    </li>`});let s=e.filter(c=>c.isComplete===!1);t||(f.style.display="none"),t&&(f.style.display="block",t+=` <div class="info">
    <span>items left <span class="numberOfTasks">${s.length}</span></span>
    <div class="infoFilter">
      <button class = "filterButton" data-filter="all">All</button>
      <button class = "filterButton" data-filter="active">Active</button>
      <button class = "filterButton" data-filter="completed">Completed</button>
    </div>
    <button class= "clearCompleted">Clear Completed</button>
  </div>
`),g.innerHTML=t,p.value="",T()},A=e=>{e.preventDefault();const t=p.value;if(!t)return;const s={value:t,isComplete:!1},c=r("tasks")||[];c.push(s),a("tasks",c),i(c),l()},l=()=>{u.classList.contains("darkIsActive")||r("darkmodeFlag")&&y(),i(r("tasks"))},k=e=>{const t=e.currentTarget.dataset.filter,s=r("tasks");let c;switch(t){case"all":c=s;break;case"active":c=s.filter(o=>!o.isComplete);break;case"completed":c=s.filter(o=>o.isComplete);break;default:c=s;break}i(c)},a=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},T=()=>{h().forEach((e,t)=>{e.addEventListener("click",()=>q(t))}),m().forEach((e,t)=>e.addEventListener("click",s=>C(s,t))),m().forEach((e,t)=>e.addEventListener("keydown",s=>s.key==="Enter"&&toggleBox(s,t))),E().addEventListener("click",()=>{const t=r("tasks").filter(s=>!s.isComplete);a("tasks",t),l()}),L().forEach(e=>{e.addEventListener("click",k)}),S().forEach(e=>{e.addEventListener("click",k)})};v.addEventListener("click",A);l();new Sortable(g,{animation:150,swap:!0,swapClass:"highlight-background",onEnd:function(e){const t=r("tasks"),s=t.splice(e.oldIndex,1)[0];t.splice(e.newIndex,0,s),a("tasks",t),l()}});
