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
  {time:"16:15", title:"Fondo Emprender", entity:"SENA", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"16:55", title:"Liderazgo y Bienestar — Cuidarse", speaker:"Daniel Zapata", type:"Charla", place:"Auditorio Benjamín Herrera"},
  {time:"17:00", title:"Crédito Estratégico: Financia tu Futuro", speaker:"Fondo de Garantías del Café - Valentina Ariza", type:"Conversatorio", place:"Auditorio Benjamín Herrera"},
  {time:"19:00", title:"Reto Empresarial", entity:"Equipo Impulsa FACEAC", type:"Reto", place:"Auditorio Benjamín Herrera"}
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

// =========
// Helpers
// =========
const $ = (q,el=document) => el.querySelector(q);
function initials(str){
  return (str||'').split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join('');
}

// "HH:MM" → minutos
const toMin = (hhmm="00:00") => {
  const [h,m] = hhmm.split(":").map(n=>parseInt(n,10)||0);
  return h*60 + m;
};

// Devuelve el índice del evento en curso (entre su inicio y el del siguiente)
function computeNowIndex(list){
  const now = new Date();
  const cur = now.getHours()*60 + now.getMinutes();
  for (let i=0;i<list.length;i++){
    const start = toMin(list[i].time);
    const end   = i < list.length-1 ? toMin(list[i+1].time) : start + 60; // aprox 1h si es el último
    if (cur >= start && cur < end) return i;
  }
  return -1;
}

// ==========================================
// Programación — tarjetas MINIMAL (hora grande + título + lugar)
// ==========================================
function renderScheduleSlots(){
  const grid = document.getElementById('scheduleGrid');
  if (!grid) return;

  grid.className = 'schedule-vertical';
  grid.innerHTML = '';

  const nowIdx = computeNowIndex(PROGRAMACION);

  PROGRAMACION.forEach((it, idx)=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'slot-vert';
    btn.setAttribute(
      'aria-label',
      `Ver detalle de ${it.title || it.entity || it.speaker || 'actividad'} a las ${it.time}`
    );

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

// ===============
// Inicialización
// ===============
renderScheduleSlots();  // vista vertical minimal + EN CURSO
renderVentures();
$('#statEmps') && ($('#statEmps').textContent = EMPRENDIMIENTOS.length);
$('#statActs') && ($('#statActs').textContent = PROGRAMACION.length);
