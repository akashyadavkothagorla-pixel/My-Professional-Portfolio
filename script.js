const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
const themeBtn=document.getElementById('themeBtn');
const topBtn=document.getElementById('topBtn');

menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

if(localStorage.getItem('theme')==='light')document.body.classList.add('light');
themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');
});

window.addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));
topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
