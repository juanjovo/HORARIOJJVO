// ========================================
// RENDERCODE QUEST — App principal
// ========================================

// ===== SCHEDULE DATA =====
const DAYS=[
{name:"LUN",full:"LUNES",tag:"12K + Rendercode",icon:"🏃",color:"#00e6a7",items:[
{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:30",a:"Correr 12K",cat:"Salud",xp:30,key:1},{t:"7:30-8:30",a:"Ducha + desayuno + agenda",cat:"Rutina",xp:5},{t:"8:30-9:00",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"9:00-10:00",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"10:00-10:30",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:30-11:30",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:30-12:00",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"12:00-13:00",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"13:00-14:00",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"14:00-14:30",a:"Inglés 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Cierre del día",cat:"Hábito",xp:10},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"MAR",full:"MARTES",tag:"Rendercode + Cerro 7pm",icon:"⛰️",color:"#3b82f6",items:[
{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"13:30-14:00",a:"Curso gratis 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Cerro de las Tres Cruces",cat:"Salud",xp:30,key:1},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"MIÉ",full:"MIÉRCOLES",tag:"Rendercode + Inglés",icon:"💻",color:"#8b5cf6",items:[
{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"13:30-14:00",a:"Inglés 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Cierre del día",cat:"Hábito",xp:10},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"JUE",full:"JUEVES",tag:"Rendercode + Iglesia 7pm",icon:"⛪",color:"#f59e0b",items:[
{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"13:30-14:00",a:"Curso gratis 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Iglesia + Santísimo",cat:"Fe",xp:20,key:1},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"VIE",full:"VIERNES",tag:"Rendercode + Lavar vehículos",icon:"🚗",color:"#ef4444",items:[
{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"14:00-14:40",a:"Lavar el Carro",cat:"Hogar",xp:10},{t:"14:40-15:00",a:"Lavar la Moto",cat:"Hogar",xp:10},{t:"19:00",a:"Cierre semana",cat:"Hábito",xp:10},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"SÁB",full:"SÁBADO",tag:"Rappi jornada",icon:"🛵",color:"#f97316",items:[
{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"7:00-8:00",a:"Desayuno + alistarse",cat:"Rutina",xp:5},{t:"8:00-14:00",a:"Rappi — jornada completa",cat:"Ingresos",xp:40,key:1},{t:"14:00-15:00",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"15:00-17:00",a:"Contenido / pendientes RC",cat:"RC/Marca",xp:15},{t:"17:00",a:"Libre / descanso",cat:"Personal",xp:0,skip:1}]},
{name:"DOM",full:"DOMINGO",tag:"Aseo + Descanso",icon:"🧹",color:"#6b7280",items:[
{t:"Libre",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"Mañana",a:"Aseo de la casa",cat:"Hogar",xp:20,key:1},{t:"Hasta 2pm",a:"Terminar aseo máx 2pm",cat:"Hogar",xp:10},{t:"Tarde 1h",a:"Planeación semana (Notion)",cat:"Estrategia",xp:15},{t:"Tarde",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"Tarde",a:"Descanso / familia",cat:"Personal",xp:0,skip:1},{t:"Temprano",a:"Dormir — reinicia 5:30am",cat:"Salud",xp:5}]}
];
const CAT_COLORS={Fe:"#f59e0b",Salud:"#22c55e",Rutina:"#64748b",Rendercode:"#00e6a7",Desarrollo:"#8b5cf6",Marca:"#ec4899","Hábito":"#06b6d4",Hogar:"#f97316",Ingresos:"#eab308",Personal:"#94a3b8",Estrategia:"#3b82f6","RC/Marca":"#14b8a6"};
const TITLES=["Novato","Aprendiz","Guerrero","Veterano","Maestro","Leyenda","Élite","Titan","Inmortal","Dios del Grind"];
const XP_PER_LVL=200, BONUS_ALL=50;

// ===== AUTH STATE =====
let currentUser = null;
let state = {checks:{},totalXp:0,streak:0,lastDay:null,completedDays:0};
let activeDay = (()=>{const d=new Date().getDay();return d===0?6:d-1;})();
let prevLevel = 0;
let loginMode = "login"; // "login" | "register"

// ===== STORAGE KEYS =====
const USERS_KEY = "rcq_users"; // {username: {password, created}}
const DATA_KEY = u => `rcq_data_${u}`;
const LAST_USER = "rcq_last";

// ===== USER MANAGEMENT =====
function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); } catch { return {}; }
}
function saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

function registerUser(username, password) {
  if (!username || username.length < 2) return "Nombre muy corto (mín. 2 caracteres)";
  if (!password || password.length < 4) return "Contraseña muy corta (mín. 4 caracteres)";
  const users = getUsers();
  if (users[username.toLowerCase()]) return "Este usuario ya existe";
  users[username.toLowerCase()] = { password, displayName: username, created: new Date().toISOString() };
  saveUsers(users);
  return null;
}

function loginUser(username, password) {
  const users = getUsers();
  const u = users[username.toLowerCase()];
  if (!u) return "Usuario no encontrado";
  if (u.password !== password) return "Contraseña incorrecta";
  return null;
}

function setCurrentUser(username) {
  const users = getUsers();
  const u = users[username.toLowerCase()];
  currentUser = { id: username.toLowerCase(), name: u.displayName || username };
  localStorage.setItem(LAST_USER, username.toLowerCase());
  loadUserData();
}

function logout() {
  currentUser = null;
  localStorage.removeItem(LAST_USER);
  document.getElementById("app").style.display = "none";
  document.getElementById("login-screen").style.display = "flex";
  renderLogin();
}

// ===== DATA PERSISTENCE =====
function loadUserData() {
  try {
    const raw = localStorage.getItem(DATA_KEY(currentUser.id));
    if (raw) state = JSON.parse(raw);
    else state = {checks:{},totalXp:0,streak:0,lastDay:null,completedDays:0};
  } catch { state = {checks:{},totalXp:0,streak:0,lastDay:null,completedDays:0}; }
  prevLevel = Math.floor(state.totalXp / XP_PER_LVL);
  // Also try server
  tryServerLoad();
}

function saveState() {
  if (!currentUser) return;
  localStorage.setItem(DATA_KEY(currentUser.id), JSON.stringify(state));
  tryServerSave();
}

async function tryServerLoad() {
  try {
    const r = await fetch(`/api/load?user=${currentUser.id}`, {signal: AbortSignal.timeout(2000)});
    if (r.ok) { const d = await r.json(); if (d.totalXp > state.totalXp) { state = d; prevLevel = Math.floor(state.totalXp / XP_PER_LVL); render(); } }
  } catch {}
}
async function tryServerSave() {
  try { await fetch("/api/save", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:currentUser.id,...state})}); } catch {}
}

// ===== HELPERS =====
function getWeekKey(){const d=new Date();d.setDate(d.getDate()-d.getDay()+1);return d.toISOString().slice(0,10);}
function getTodayKey(){return new Date().toISOString().slice(0,10);}
function getDayProgress(di){const wk=getWeekKey(),items=DAYS[di].items.filter(i=>!i.skip),done=items.filter((_,i)=>{const ri=DAYS[di].items.indexOf(items[i]);return state.checks[`${wk}-${di}-${ri}`];}).length;return items.length?Math.round((done/items.length)*100):0;}
function getDayXp(di){const wk=getWeekKey();let e=0,t=0;DAYS[di].items.forEach((it,i)=>{if(!it.skip){t+=it.xp;if(state.checks[`${wk}-${di}-${i}`])e+=it.xp;}});return{earned:e,total:t};}

// ===== PARTICLES =====
function initParticles(){const c=document.getElementById("particles");if(c.children.length>0)return;const colors=["#00e6a7","#3b82f6","#8b5cf6","#f59e0b"];for(let i=0;i<30;i++){const p=document.createElement("div");p.className="particle";p.style.left=Math.random()*100+"%";p.style.top=(40+Math.random()*60)+"%";p.style.animationDelay=Math.random()*6+"s";p.style.animationDuration=(4+Math.random()*5)+"s";p.style.background=colors[Math.floor(Math.random()*colors.length)];c.appendChild(p);}}

// ===== TOGGLE QUEST =====
function toggleQuest(dayIdx,itemIdx){
  const item=DAYS[dayIdx].items[itemIdx];if(item.skip)return;
  const wk=getWeekKey(),k=`${wk}-${dayIdx}-${itemIdx}`,was=!!state.checks[k];
  state.checks[k]=!was;
  const items=DAYS[dayIdx].items.filter(i=>!i.skip);
  const allDone=items.every((_,i)=>{const ri=DAYS[dayIdx].items.indexOf(items[i]);return state.checks[`${wk}-${dayIdx}-${ri}`];});
  let bonus=0;
  if(!was){
    state.totalXp+=item.xp;
    if(allDone){bonus=BONUS_ALL;state.totalXp+=bonus;state.completedDays++;}
    const today=getTodayKey();
    if(state.lastDay!==today){const y=new Date();y.setDate(y.getDate()-1);state.streak=(state.lastDay===y.toISOString().slice(0,10)||!state.lastDay)?state.streak+1:1;state.lastDay=today;}
    showXpPopup(item.xp,bonus);
  } else { state.totalXp=Math.max(0,state.totalXp-item.xp); }
  const newLevel=Math.floor(state.totalXp/XP_PER_LVL);
  if(newLevel>prevLevel&&!was)setTimeout(()=>showLevelUp(newLevel),800);
  prevLevel=newLevel;
  saveState();render();
}

// ===== POPUPS =====
function showXpPopup(xp,bonus){
  const old=document.querySelector(".xp-popup");if(old)old.remove();
  const div=document.createElement("div");div.className="xp-popup";
  div.innerHTML=`<div class="xp-num">+${xp} XP</div>${bonus>0?`<div class="xp-bonus">🏆 DÍA COMPLETO +${bonus}</div>`:""}`;
  document.body.appendChild(div);setTimeout(()=>div.remove(),1600);
}
function showLevelUp(lvl){
  const title=TITLES[Math.min(lvl,TITLES.length-1)];
  const div=document.createElement("div");div.className="levelup-overlay";
  div.innerHTML=`<div class="levelup-card"><div class="lu-icon">⚔️</div><div class="lu-title">LEVEL UP</div><div class="lu-level">${lvl}</div><div class="lu-rank">${title}</div><div class="lu-dismiss" onclick="this.closest('.levelup-overlay').remove()">Toca para continuar</div></div>`;
  div.onclick=e=>{if(e.target===div)div.remove();};document.body.appendChild(div);
}

// ===== RENDER LOGIN =====
function renderLogin(){
  const users = getUsers();
  const userList = Object.entries(users);
  const lastUser = localStorage.getItem(LAST_USER);

  document.getElementById("login-screen").innerHTML = `
    <div class="login-box">
      <div class="login-logo">
        <span class="logo-icon">⚔️</span>
        <div class="logo-title"><span class="t1">RENDER</span><span class="t2">CODE</span></div>
        <div class="logo-sub">— Q U E S T —</div>
      </div>
      <div class="login-tagline">Convierte tu rutina en una <span>misión diaria</span>.<br>Gana XP, sube de nivel, domina tu día.</div>
      <div class="login-card">
        <h3>${loginMode==="register"?"CREAR CUENTA":"INICIAR SESIÓN"}</h3>
        <input class="login-input" id="inp-user" type="text" placeholder="Nombre de usuario" value="${lastUser||""}" autocomplete="username" autocapitalize="off">
        <input class="login-input" id="inp-pass" type="password" placeholder="Contraseña" autocomplete="${loginMode==="register"?"new-password":"current-password"}">
        <button class="login-btn" onclick="handleAuth()">${loginMode==="register"?"CREAR CUENTA":"INICIAR MISIÓN"}</button>
        <div class="login-error" id="login-error"></div>
        <div class="login-switch">${loginMode==="register"
          ?`¿Ya tienes cuenta? <a onclick="loginMode='login';renderLogin()">Inicia sesión</a>`
          :`¿Primera vez? <a onclick="loginMode='register';renderLogin()">Crear cuenta</a>`}
        </div>
      </div>
      ${userList.length > 0 ? `
        <div class="login-users">
          <h4>CUENTAS EN ESTE DISPOSITIVO</h4>
          ${userList.map(([id, u]) => {
            const d = localStorage.getItem(DATA_KEY(id));
            const xp = d ? JSON.parse(d).totalXp || 0 : 0;
            const lvl = Math.floor(xp / XP_PER_LVL);
            return `<div class="user-chip" onclick="document.getElementById('inp-user').value='${id}';document.getElementById('inp-pass').focus()">
              <div class="chip-avatar">${lvl}</div>
              <span class="chip-name">${u.displayName || id}</span>
              <span class="chip-lvl">LV${lvl}</span>
            </div>`;
          }).join("")}
        </div>` : ""}
    </div>`;

  // Auto-focus
  setTimeout(() => {
    const inp = document.getElementById(lastUser ? "inp-pass" : "inp-user");
    if (inp) inp.focus();
  }, 300);

  // Enter key
  document.querySelectorAll(".login-input").forEach(inp => {
    inp.addEventListener("keydown", e => { if (e.key === "Enter") handleAuth(); });
  });
}

function handleAuth(){
  const user = document.getElementById("inp-user").value.trim();
  const pass = document.getElementById("inp-pass").value;
  const errEl = document.getElementById("login-error");

  if (loginMode === "register") {
    const err = registerUser(user, pass);
    if (err) { errEl.textContent = err; return; }
  }
  const err = loginUser(user, pass);
  if (err) { errEl.textContent = err; return; }

  setCurrentUser(user);
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app").style.display = "block";
  render();
}

// ===== RENDER MAIN APP =====
function render(){
  if(!currentUser)return;
  const level=Math.floor(state.totalXp/XP_PER_LVL),xpInLvl=state.totalXp%XP_PER_LVL;
  const title=TITLES[Math.min(level,TITLES.length-1)];
  const day=DAYS[activeDay],pct=getDayProgress(activeDay),{earned,total}=getDayXp(activeDay),wk=getWeekKey();
  const weekDone=DAYS.map((_,i)=>getDayProgress(i));

  document.getElementById("app").innerHTML=`
    <div class="topbar"><div class="topbar-inner">
      <div class="brand"><span class="rc">RENDER</span>CODE<span class="qt">QUEST</span></div>
      <div style="display:flex;gap:8px;align-items:center">
        <div class="streak-badge">🔥 ${state.streak}</div>
        <button class="profile-btn" onclick="logout()">
          <div class="p-avatar">${level}</div>
          <span>${currentUser.name}</span>
        </button>
      </div>
    </div></div>

    <div class="player-card"><div class="pc-inner">
      <div class="pc-top">
        <div class="avatar">${level}<div class="lvl-ring"></div></div>
        <div class="pc-info">
          <div class="pc-title">${title}</div>
          <div class="pc-name">${currentUser.name}</div>
        </div>
        <button class="stats-btn" onclick="document.getElementById('weekBars').style.display=document.getElementById('weekBars').style.display==='none'?'flex':'none'">📊</button>
      </div>
      <div class="pc-xp-text"><span>LV ${level}</span><span>${state.totalXp} XP · ${xpInLvl}/${XP_PER_LVL} next</span></div>
      <div class="xp-bar-bg"><div class="xp-bar-fill" style="width:${(xpInLvl/XP_PER_LVL)*100}%"></div></div>
    </div></div>

    <div class="stats-row">
      <div class="stat-box"><div class="stat-val" style="color:#00e6a7">${state.totalXp}</div><div class="stat-lbl">XP TOTAL</div></div>
      <div class="stat-box"><div class="stat-val" style="color:#f59e0b">${state.completedDays}</div><div class="stat-lbl">DÍAS 100%</div></div>
      <div class="stat-box"><div class="stat-val" style="color:#8b5cf6">${level}</div><div class="stat-lbl">NIVEL</div></div>
    </div>

    <div id="weekBars" class="week-bars" style="display:none">
      ${DAYS.map((d,i)=>{const p=getDayProgress(i);return`<div class="wb-col"><div class="wb-bar-bg"><div class="wb-bar-fill" style="height:${p}%;background:linear-gradient(180deg,${d.color}cc,${d.color}44)"></div><div class="wb-bar-pct">${p}%</div></div><div class="wb-day">${d.name}</div></div>`;}).join("")}
    </div>

    <div class="day-tabs">
      ${DAYS.map((d,i)=>{const p=getDayProgress(i);return`<div class="day-tab ${i===activeDay?'active':''} ${p===100?'done':''}" onclick="activeDay=${i};render()"><div class="dt-icon">${d.icon}</div><div>${d.name}</div><div class="dt-pct">${p}%</div></div>`;}).join("")}
    </div>

    <div class="day-header"><div class="dh-inner">
      <div class="dh-left"><h2>${day.full}</h2><div class="dh-tag" style="color:${day.color}">${day.tag}</div></div>
      <div class="dh-right"><div class="dh-pct ${pct===100?'complete':''}" style="color:${pct===100?'':'#fff'}">${pct}%</div><div class="dh-sub">${earned}/${total} XP</div></div>
    </div></div>

    <div class="day-progress"><div class="dp-bar"><div class="dp-fill" style="width:${pct}%;background:linear-gradient(90deg,${day.color},${day.color}88);${pct===100?'box-shadow:0 0 12px '+day.color+'88':''}"></div></div></div>

    <div class="quest-list">
      ${day.items.map((it,idx)=>{const k=`${wk}-${activeDay}-${idx}`,checked=!!state.checks[k],cc=CAT_COLORS[it.cat]||"#64748b";
      return`<div class="quest ${it.key?'key':''} ${checked?'checked':''} ${it.skip?'skip':''}" onclick="toggleQuest(${activeDay},${idx})" style="animation-delay:${idx*0.04}s">
        <div class="q-check">${checked?'✓':''}</div>
        <div class="q-body"><div class="q-text">${it.a}</div><div class="q-meta"><span class="q-time" style="color:${day.color}">${it.t}</span><span class="q-cat" style="color:${cc};background:${cc}15">${it.cat}</span></div></div>
        ${!it.skip&&it.xp>0?`<div class="q-xp">+${it.xp}</div>`:''}</div>`;}).join("")}
    </div>`;
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded",()=>{
  initParticles();
  const lastUser = localStorage.getItem(LAST_USER);
  const users = getUsers();
  // Auto-login si hay usuario guardado
  if(lastUser && users[lastUser]){
    setCurrentUser(lastUser);
    document.getElementById("login-screen").style.display="none";
    document.getElementById("app").style.display="block";
    render();
  } else {
    renderLogin();
  }
});
