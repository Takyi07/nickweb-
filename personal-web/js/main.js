// Mobile menu toggle and footer year. No dependencies.
const mn=document.getElementById('mn'),mb=document.getElementById('mb');
function tg(o){mn.classList.toggle('hidden',!o);mn.classList.toggle('flex',o);mb.setAttribute('aria-expanded',o)}
mb.onclick=()=>tg(mn.classList.contains('hidden'));
mn.querySelectorAll('a').forEach(a=>a.onclick=()=>tg(false));
document.getElementById('yr').textContent=new Date().getFullYear();
