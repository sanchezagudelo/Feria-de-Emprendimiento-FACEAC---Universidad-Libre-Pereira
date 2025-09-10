// ===================
// Programación (datos)
// ===================
const PROGRAMACION = [
  {time:"09:00", title:"Apertura Oficial e Inicio De La Feria", speaker:"IMPULSA FACEAC", type:"Apertura", place:"Plazoleta Ágora"},
  {time:"10:00", title:"Conversatorio: El viaje del Emprendedor", speaker:"Alexander Cadavid", type:"Conversatorio", place:"Auditorio Benjamín Herrera"},
  {time:"11:00", title:"Programa ACUMA", entity:"Fundación Frisby", type:"Conversatorio", place:"Auditorio Benjamín Herrera"},
  {time:"11:40", title:"Música en Vivo y Bailes", entity:"Bienestar Universitario", type:"Cultural", place:"Plazoleta Ágora"},
  {time:"12:00", title:"De la Idea al Presupuesto", entity:"Fondo de Garantías del Café - Valentina Ariza", type:"Conversatorio", place:"Auditorio Benjamín Herrera"},
  {time:"13:00", title:"Receso", speaker:"IMPULSA FACEAC", type:"Receso", place: "Universidad Libre Seccional Pereira"},
  {time:"14:00", title:"Marketing y Redes Sociales", entity:"Lina Gómez", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"15:00", title:"Impulsando Valor Con Sistemas De Calidad", entity:"SENA", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"16:00", title:"Fondo Emprender", entity:"SENA", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"17:00", title:"Liderazgo y Bienestar — Cuidarse", speaker:"Daniel Zapata", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"17:00", title:"Crédito Estratégico: Financia tu Futuro", speaker:"Fondo de Garantías del Café - Valentina Ariza", type:"Conversatorio", place:"Bloque B - Salon 501"},
  {time:"18:00", title:"Musica en Vivo y Bailes", speaker:"Bienestar Universitario", type:"Cultural", place:"Auditorio Benjamín Herrera"},
  {time:"18:30", title:"Visión Empresa", entity:"Automotores Andina - Juan Manuel Restrepo", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"19:15", title:"Reto Empresarial", entity:"Equipo Impulsa FACEAC", type:"Reto", place:"Auditorio Benjamín Herrera"}
];

// =====================================
// Emprendimientos (con campo logo)
// =====================================
const EMPRENDIMIENTOS = [
  {emprendedor:"Tatiana Pamplona Saldarriaga", nombre:"Ceramicartesana", sector:"Arte y Cultura", contacto:"3214649380", logo:"logos/ceramicartesana.png.png"},
  {emprendedor:"Miguel Valencia Izquierdo", nombre:"Protección Financiera Colombia SAS", sector:"Jurídico", contacto:"3147876990", logo: "logos/proteccionfinanciera.png"},
  {emprendedor:"Harrison Ramirez Cuartas", nombre:"Marce Cuartas Joyeria Artesanal", sector:"Moda", contacto:"3147923092", logo: "logos/marcecuartasjoyeria.jpg"},
  {emprendedor:"Natalia Vélez Taba", nombre:"Seduxxion", sector:"Moda", contacto:"3145647404", logo:"logos/seduxxion.png.jpg"},
  {emprendedor:"Jennifer Paola Jiménez Restrepo", nombre:"Ls Magnolia Accesorios", sector:"Moda", contacto:"3206900638", logo: "logos/lamagnolia.jpg"},
  {emprendedor:"Felipe Sanchez Cuervo", nombre:"Felipe y Sus Dulces", sector:"Alimentación", contacto:"3142162790", logo: "logos/felipeysusdulces.jpg"},
  {emprendedor:"Valentina Maya Vasquez", nombre:"Solaris Accesorios", sector:"Moda", contacto:"3203513315", logo: "logos/solaris.png"},
  {emprendedor:"Juan Sebastian Garces Maldonado", nombre:"Heaven Cocktails", sector:"Alimentación", contacto:"3108368192", logo: "logos/heaven.png"},
  {emprendedor:"Isabella Arango Jordan", nombre:"Gemini Lingerie", sector:"Moda", contacto:"3105365218", logo: "logos/gemini.png"},
  {emprendedor:"Isabella Montoya", nombre:"Beli Pijamas", sector:"Moda", contacto:"3209479579", logo: "logos/belipijamas.png"},
  {emprendedor:"Juliana Marcela Ramírez Grajales", nombre:"Lula", sector:"Arte y Cultura", contacto:"3112732077", logo: "logos/lula.jpg"},
  {emprendedor:"Luisa Fernanda Montes Diaz", nombre:"SORBO a SORBO Specialty Coffee", sector:"Alimentación", contacto:"3103996879", logo: "logos/sorboasorbo.png"},
  {emprendedor:"Tara Arias", nombre:"11 PM", sector:"Moda", contacto:"3188314336", logo: "logos/11pm.png"},
  {emprendedor:"Nicolás Henao Dávila", nombre:"Ofero Eje Cafetero", sector:"Tecnología", contacto:"3117534435", logo:"logos/ofero.png"},
  {emprendedor:"Sara Kallewaard mejia", nombre:"Savaroom", sector:"Moda", contacto:"3218828343", logo:"logos/savaroom.png.png"},
  {emprendedor:"Daniel Yamid Cardona Mejía", nombre:"Yami Salchipapa", sector:"Alimentación", contacto:"3127078598", logo: "logos/yamisalchipapas.jpg"},
  {emprendedor:"Ana Maria Arteaga", nombre:"Ámbar Accesorios", sector:"Moda", contacto:"3167046984", logo: "logos/ambar.png"},
  {emprendedor:"Ana Maria Rincón", nombre:"Toque de Dulzura", sector:"Alimentación", contacto:"3024141206", logo: "logos/cookiss.jpg"}
];

// ===============================
// Patrocinadores (datos)
// ===============================
const SPONSORS = [
  { nombre: "Aservi de Colombia", logo: "patrocinadores/asservi.jpeg", url: "https://www.instagram.com/asservisas/" },
  { nombre: "Fundeagro", logo: "patrocinadores/fundeagro.png", url: "https://www.fundeagro.org/es/" },
  { nombre: "Multintegral", logo: "patrocinadores/multintegral.png", url: "https://multintegral.com/" },
  { nombre: "Postobon", logo: "patrocinadores/postobon.png", url: "https://www.postobon.com/" },
  { nombre: "Integro", logo: "patrocinadores/integro.png", url: "https://www.igc.com.co/" }
];

// =========
// Helpers
// =========
const $ = (q,el=document) => el.querySelector(q);
function initials(str){
  return (str||'').split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join('');
}
const toMin = (hhmm="00:00") => {
  const [h,m] = hhmm.split(":").map(n=>parseInt(n,10)||0);
  return h*60 + m;
};
function computeNowIndex(list){
  const now = new Date();
  const cur = now.getHours()*60 + now.getMinutes();
  for (let i=0;i<list.length;i++){
    const start = toMin(list[i].time);
    const end   = i < list.length-1 ? toMin(list[i+1].time) : start + 60;
    if (cur >= start && cur < end) return i;
  }
  return -1;
}

// ==========================================
// Programación — tarjetas MINIMAL
// ==========================================
function renderScheduleSlots(){
  const grid = document.getElementById('scheduleGrid');
  if (!grid) return;

  grid.classList.add('schedule-vertical');
  grid.innerHTML = '';

  const nowIdx = computeNowIndex(PROGRAMACION);

  PROGRAMACION.forEach((it, idx)=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'slot-vert';
    btn.setAttribute('aria-label', `Ver detalle de ${it.title || it.entity || it.speaker || 'actividad'} a las ${it.time}`);

    const title = it.title || 'Actividad';
    const place = it.place || '—';

    btn.innerHTML = `
      <div class="slot-vert__time">${it.time}</div>
      <div class="slot-vert__main">
        <div class="slot-vert__title">${title}</div>
        <div class="slot-vert__place">${place}</div>
      </div>
      ${idx===nowIdx ? `<div class="slot-vert__now">EN CURSO</div>` : ``}
    `;

    btn.addEventListener('click', ()=> openScheduleModal(it));
    grid.appendChild(btn);
  });
}

// ==================
// Modal Programación
// ==================
const sModal = document.getElementById('scheduleModal');
const smClose = document.getElementById('smClose');

function openScheduleModal(it){
  if (!sModal) return;
  document.getElementById('smTitle').textContent   = it.title || '—';
  document.getElementById('smTime').textContent    = it.time || '—';
  document.getElementById('smType').textContent    = it.type || '—';
  document.getElementById('smSpeaker').textContent = it.speaker || it.entity || '—';
  document.getElementById('smPlace').textContent   = it.place || '—';
  sModal.setAttribute('aria-hidden','false');
  smClose && smClose.focus();
}
function closeScheduleModal(){ sModal && sModal.setAttribute('aria-hidden','true'); }
smClose && smClose.addEventListener('click', closeScheduleModal);
sModal  && sModal.addEventListener('click', (e)=>{ if(e.target === sModal) closeScheduleModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && sModal && sModal.getAttribute('aria-hidden')==='false') closeScheduleModal(); });

// ==========================================
// Emprendimientos — tiles + modal de detalle
// ==========================================
function renderVentures(){
  const grid = $('#ventureGrid');
  if (!grid) return;
  grid.classList.add('tiles');
  grid.innerHTML = '';

  EMPRENDIMIENTOS.forEach(v=>{
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.type = 'button';
    tile.setAttribute('aria-label', `Ver detalles de ${v.nombre}`);

    if (v.logo){
      tile.innerHTML = `<img src="${v.logo}" alt="Logo ${v.nombre}" loading="lazy">`;
    } else {
      tile.innerHTML = `<div class="avatar" aria-hidden="true">${initials(v.nombre)}</div>`;
    }

    tile.addEventListener('click', ()=> openVentureModal(v));
    grid.appendChild(tile);
  });
}

// ------- Modal Emprendimientos -------
const modal = $('#ventureModal');
const vmClose = $('#vmClose');

function openVentureModal(v){
  if (!modal) return;
  $('#vmTitle').textContent = v.nombre || '—';
  $('#vmSector').textContent = v.sector || '—';
  $('#vmOwner').textContent = v.emprendedor || '—';

  const logoEl = $('#vmLogo');
  if (v.logo){ 
    logoEl.src = v.logo; 
    logoEl.alt = `Logo ${v.nombre}`; 
    logoEl.style.display = 'block'; 
  } else { 
    logoEl.removeAttribute('src'); 
    logoEl.style.display = 'none'; 
  }

  const wa = (v.contacto||'').replace(/\D/g,'');
  const link = $('#vmWhats');
  link.textContent = v.contacto || '—';
  link.href = wa ? `https://wa.me/57${wa}` : '#';

  modal.setAttribute('aria-hidden', 'false');
  vmClose && vmClose.focus();
}
function closeVentureModal(){ modal && modal.setAttribute('aria-hidden','true'); }
vmClose && vmClose.addEventListener('click', closeVentureModal);
modal && modal.addEventListener('click', (e)=>{ if(e.target === modal) closeVentureModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal && modal.getAttribute('aria-hidden')==='false') closeVentureModal(); });

// ==========================================
// Patrocinadores — carrusel (1 logo por slide)
// ==========================================
(function initSponsors(){
  const track   = document.getElementById('sponsorTrack');
  const dots    = document.getElementById('sponsorDots');
  const prevBtn = document.getElementById('spPrev');
  const nextBtn = document.getElementById('spNext');

  if (!track) return;

  let idx = 0;
  let slides = [];
  let timer = null;

  // ← Aquí el cambio: siempre 1 por vista
  const perView = () => 1;
  let pv = perView();

  const chunk = (arr, size) => {
    const out = [];
    for (let i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size));
    return out;
  };

  const stop = ()=> { if (timer){ clearInterval(timer); timer = null; } };
  const start = ()=> {
    stop();
    if (slides.length <= 1) return;
    timer = setInterval(()=> go(idx+1), 3600);
  };

  function build(){
    stop();
    idx = 0;
    pv = perView();
    track.innerHTML = '';
    if (dots) dots.innerHTML = '';

    if (!SPONSORS || SPONSORS.length === 0){
      const empty = document.createElement('div');
      empty.className = 'sp-empty';
      empty.textContent = 'Pronto anunciaremos los patrocinadores';
      track.appendChild(empty);
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (dots)    dots.style.display    = 'none';
      return;
    }

    slides = chunk(SPONSORS, pv);

    slides.forEach(group=>{
      const slide = document.createElement('div');
      slide.className = 'sp-slide';
      slide.style.setProperty('--pv', pv);
      group.forEach(s=>{
        const a = document.createElement('a');
        a.className = 'sp-item';
        if (s.url){ a.href = s.url; a.target='_blank'; a.rel='noopener'; }
        a.setAttribute('aria-label', s.nombre || 'Patrocinador');
        const img = document.createElement('img');
        img.className = 'sp-logo';
        img.src = s.logo;
        img.alt = s.nombre || 'Patrocinador';
        img.loading = 'lazy';
        a.appendChild(img);
        slide.appendChild(a);
      });
      track.appendChild(slide);
    });

    if (dots){
      dots.style.display = '';
      slides.forEach((_,i)=>{
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'sp-dot';
        b.setAttribute('aria-label', `Ir al slide ${i+1}`);
        b.addEventListener('click', ()=> go(i));
        dots.appendChild(b);
      });
    }

    if (prevBtn){ prevBtn.style.display=''; prevBtn.onclick = ()=> go(idx-1); }
    if (nextBtn){ nextBtn.style.display=''; nextBtn.onclick = ()=> go(idx+1); }

    // swipe
    let startX = 0;
    track.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX; }, {passive:true});
    track.addEventListener('touchend',   e=>{
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(idx + (dx<0?1:-1));
    }, {passive:true});

    update();
    start();

    const container = track.closest('.sponsor-carousel');
    if (container){
      container.addEventListener('mouseenter', stop);
      container.addEventListener('mouseleave', start);
      container.addEventListener('focusin',  stop);
      container.addEventListener('focusout', start);
    }
  }

  function go(i){
    if (!slides.length) return;
    idx = (i + slides.length) % slides.length;
    update();
  }

  function update(){
    track.style.transform = `translateX(-${idx*100}%)`;
    if (dots){
      dots.querySelectorAll('.sp-dot').forEach((d,i)=> d.classList.toggle('is-active', i===idx));
    }
    const show = slides.length > 1;
    if (prevBtn) prevBtn.style.display = show ? '' : 'none';
    if (nextBtn) nextBtn.style.display = show ? '' : 'none';
    if (dots)    dots.style.display    = show ? '' : 'none';
  }

  // Inicial
  build();

  // Mantengo el listener por si luego vuelves a hacerlo responsivo
  let lastPV = pv;
  const onResize = () => {
    const cur = perView();
    if (cur !== lastPV){ lastPV = cur; build(); }
  };
  window.addEventListener('resize', onResize);
})();

// ===============
// Inicialización
// ===============
renderScheduleSlots();
renderVentures();

$('#statEmps') && ($('#statEmps').textContent = EMPRENDIMIENTOS.length);
$('#statActs') && ($('#statActs').textContent = PROGRAMACION.length);
