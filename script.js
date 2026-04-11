
// Sticky header
const hdr=document.getElementById('header');
window.addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>60),{passive:true});

// Hamburger
const ham=document.getElementById('hamburger'),mob=document.getElementById('mob');
ham.addEventListener('click',()=>mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mob.classList.remove('open')));

// FAQ
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item'),open=item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('active'));
    if(!open){item.classList.add('active');btn.setAttribute('aria-expanded','true')}
    else btn.setAttribute('aria-expanded','false');
  });
});

// Scroll reveal
const obs=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Counter animation
function animCount(el,target,suffix){
  let start=null,dur=1600;
  const step=ts=>{if(!start)start=ts;const p=Math.min((ts-start)/dur,1);el.childNodes[0].textContent=Math.floor(p*target).toLocaleString('en-IN');if(p<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
const cObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target,t=parseInt(el.getAttribute('data-target'));
      if(t)animCount(el,t,el.querySelector('.plus')?.textContent||'');
      cObs.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.big[data-target]').forEach(el=>cObs.observe(el));
  
  /* ── Gallery Load More ── */
  function loadMore() {
    const moreItems = document.querySelectorAll('.gallery-more');
    moreItems.forEach(el => el.classList.add('visible'));
    document.getElementById('loadMoreBtn').style.display = 'none';
  }

// Form submit → WhatsApp
function submitForm(){
  const n=document.getElementById('fn').value.trim(),p=document.getElementById('ph').value.trim();
  if(!n||!p){alert('Please enter your name and phone number.');return;}
  const s=document.getElementById('svc').value,m=document.getElementById('msg').value.trim();
  const t=encodeURIComponent(`Hi Dental Studio 32! I'm ${n} and I'd like to book an appointment`+(s?` for ${s}`:'')+`. Phone: ${p}`+(m?`. Note: ${m}`:'')+`.`);
  window.open(`https://wa.me/917506815851?text=${t}`,'_blank');
}
