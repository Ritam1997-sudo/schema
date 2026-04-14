
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


const doctors = [
  {
    name: "Dr. Stutee Nikhil Shukla",
    img: "/images/dr-stutee.jpg",
    badge: "13+ Yrs · 5000+ Patients",
    spec: "Chief Cosmetic & Aesthetic Dentist · Implantologist",
    role: "MDS – Oral Medicine & Radiology · Fellowship in Aesthetic Dentistry, Germany",
    bio: `
      <p>Dr. Stutee Shukla (Beriwal) leads Dental Studio 32, Goregaon West, with over 13 years of clinical experience and a reputation for precision, diagnostic excellence, and patient-focused care.</p>
      <p>An MDS specialist in Oral Medicine & Radiology, she is highly skilled in diagnosing complex oral conditions, TMJ disorders, and orofacial pain. Her advanced training in CBCT enables accurate, comprehensive treatment planning.</p>
      <p>She further refined her expertise with a Fellowship in Aesthetic Dentistry from Germany, bringing global standards to smile design and minimally invasive cosmetic treatments. Blending diagnostic expertise with aesthetic finesse, she offers smile makeovers, veneers, implants, and full-mouth rehabilitation.</p>
      <p>Known for her calm, compassionate approach, Dr. Stutee ensures a seamless experience where patients feel informed, comfortable, and assured at every step.</p>
    `,
    tags: ["Smile Makeover","Dental Implants","Veneers","CBCT Imaging","TMJ Disorders","Full-Mouth Rehab","Aesthetic Dentistry"]
  },
  {
    name: "Dr. Bharvi Chudasama",
    img: "/images/dr-bharvi.jpg",
    badge: "MDS Endodontist",
    spec: "Specialist Endodontist",
    role: "MDS – Conservative Dentistry & Endodontics · Microscopic Dentistry",
    bio: `
      <p>Dr. Bharvi Chudasama is a specialist Endodontist dedicated to the art and science of saving natural teeth. After earning an MDS in Conservative Dentistry and Endodontics, she focused her practice on high-precision root canal therapy and microscopic dentistry.</p>
      <p>Known for a gentle touch and a strong emphasis on patient comfort, she combines advanced technology with a compassionate approach to ensure every procedure is efficient and truly pain-free.</p>
      <p>Whether it is a routine root canal or a complex re-treatment, Dr. Bharvi applies meticulous technique and the latest endodontic instruments — preserving your natural tooth for life.</p>
    `,
    tags: ["Root Canal Treatment","Microscopic Endodontics","Re-treatment RCT","Pain-Free Care","Natural Tooth Preservation"]
  },
  {
    name: "Dr. Mugdha Surve",
    img: "/images/dr-mugdha.jpg",
    badge: "12+ Yrs Orthodontist",
    spec: "Orthodontist & Invisalign Specialist",
    role: "MDS – Orthodontics · Certified Invisalign Provider · Digital Treatment Planning",
    bio: `
      <p>Dr. Mugdha Surve is an experienced orthodontist with over 12 years of clinical expertise in creating confident, healthy smiles. She specialises in Invisalign and advanced clear aligner planning — offering customised, discreet orthodontic solutions for both teens and adults.</p>
      <p>With a strong focus on digital treatment planning and precision-driven care, she designs personalised aligner treatments that deliver predictable, efficient results with minimal disruption to daily life.</p>
      <p>Dr. Mugdha is committed to combining the latest in orthodontic technology with a patient-centric approach — ensuring a comfortable, transparent, and seamless smile transformation from start to finish.</p>
    `,
    tags: ["Invisalign","Clear Aligners","Metal Braces","Ceramic Braces","Digital Planning","Teen & Adult Ortho"]
  }
];

function openDocModal(i) {
  const d = doctors[i];
  document.getElementById('modalDocImg').src = d.img;
  document.getElementById('modalDocImg').alt = d.name;
  document.getElementById('modalDocBadge').textContent = d.badge;
  document.getElementById('modalDocName').textContent = d.name;
  document.getElementById('modalDocSpec').textContent = d.spec;
  document.getElementById('modalDocRole').textContent = d.role;
  document.getElementById('modalDocBio').innerHTML = d.bio;
  document.getElementById('modalDocTags').innerHTML = d.tags.map(t => `<span>${t}</span>`).join('');
  document.getElementById('docModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDocModal(e) {
  if (e && e.target !== document.getElementById('docModalOverlay') && !e.target.classList.contains('doc-modal-close')) return;
  document.getElementById('docModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('docModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Form submit → WhatsApp
function submitForm(){
  const n=document.getElementById('fn').value.trim(),p=document.getElementById('ph').value.trim();
  if(!n||!p){alert('Please enter your name and phone number.');return;}
  const s=document.getElementById('svc').value,m=document.getElementById('msg').value.trim();
  const t=encodeURIComponent(`Hi Dental Studio 32! I'm ${n} and I'd like to book an appointment`+(s?` for ${s}`:'')+`. Phone: ${p}`+(m?`. Note: ${m}`:'')+`.`);
  window.open(`https://wa.me/917506815851?text=${t}`,'_blank');
}
