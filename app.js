// =============================================
// RENDERCODE QUEST v2 — Multi-device sync
// =============================================
const DAYS=[
{name:"LUN",full:"LUNES",tag:"12K + Rendercode",icon:"🏃",color:"#00e6a7",items:[{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:30",a:"Correr 12K",cat:"Salud",xp:30,key:1},{t:"7:30-8:30",a:"Ducha + desayuno + agenda",cat:"Rutina",xp:5},{t:"8:30-9:00",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"9:00-10:00",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"10:00-10:30",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:30-11:30",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:30-12:00",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"12:00-13:00",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"13:00-14:00",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"14:00-14:30",a:"Inglés 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Cierre del día",cat:"Hábito",xp:10},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"MAR",full:"MARTES",tag:"Rendercode + Cerro 7pm",icon:"⛰️",color:"#3b82f6",items:[{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"13:30-14:00",a:"Curso gratis 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Cerro de las Tres Cruces",cat:"Salud",xp:30,key:1},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"MIÉ",full:"MIÉRCOLES",tag:"Rendercode + Inglés",icon:"💻",color:"#8b5cf6",items:[{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"13:30-14:00",a:"Inglés 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Cierre del día",cat:"Hábito",xp:10},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"JUE",full:"JUEVES",tag:"Rendercode + Iglesia 7pm",icon:"⛪",color:"#f59e0b",items:[{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"13:30-14:00",a:"Curso gratis 30min",cat:"Desarrollo",xp:15},{t:"19:00",a:"Iglesia + Santísimo",cat:"Fe",xp:20,key:1},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"VIE",full:"VIERNES",tag:"Rendercode + Lavar vehículos",icon:"🚗",color:"#ef4444",items:[{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"6:00-7:00",a:"Ejercicio",cat:"Salud",xp:20},{t:"7:00-8:00",a:"Ducha + desayuno",cat:"Rutina",xp:5},{t:"8:00-8:30",a:"RC: Aprendizaje",cat:"Rendercode",xp:15},{t:"8:30-9:30",a:"RC: Búsqueda de Clientes",cat:"Rendercode",xp:20,key:1},{t:"9:30-10:00",a:"RC: Filtrar Clientes",cat:"Rendercode",xp:15},{t:"10:00-11:00",a:"RC: Crear Página + Filtrar",cat:"Rendercode",xp:25,key:1},{t:"11:00-11:30",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"11:30-12:30",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"12:30-13:30",a:"Contenido marca personal",cat:"Marca",xp:20},{t:"14:00-14:40",a:"Lavar el Carro",cat:"Hogar",xp:10},{t:"14:40-15:00",a:"Lavar la Moto",cat:"Hogar",xp:10},{t:"19:00",a:"Cierre semana",cat:"Hábito",xp:10},{t:"22:00",a:"Dormir",cat:"Salud",xp:5}]},
{name:"SÁB",full:"SÁBADO",tag:"Rappi jornada",icon:"🛵",color:"#f97316",items:[{t:"5:30",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"7:00-8:00",a:"Desayuno + alistarse",cat:"Rutina",xp:5},{t:"8:00-14:00",a:"Rappi — jornada completa",cat:"Ingresos",xp:40,key:1},{t:"14:00-15:00",a:"Almuerzo",cat:"Rutina",xp:0,skip:1},{t:"15:00-17:00",a:"Contenido / pendientes RC",cat:"RC/Marca",xp:15},{t:"17:00",a:"Libre / descanso",cat:"Personal",xp:0,skip:1}]},
{name:"DOM",full:"DOMINGO",tag:"Aseo + Descanso",icon:"🧹",color:"#6b7280",items:[{t:"Libre",a:"Despertar + Biblia",cat:"Fe",xp:10},{t:"Mañana",a:"Aseo de la casa",cat:"Hogar",xp:20,key:1},{t:"Hasta 2pm",a:"Terminar aseo máx 2pm",cat:"Hogar",xp:10},{t:"Tarde 1h",a:"Planeación semana (Notion)",cat:"Estrategia",xp:15},{t:"Tarde",a:"Leer 10 páginas",cat:"Desarrollo",xp:10},{t:"Tarde",a:"Descanso / familia",cat:"Personal",xp:0,skip:1},{t:"Temprano",a:"Dormir — reinicia 5:30am",cat:"Salud",xp:5}]}
];
const CC={Fe:"#f59e0b",Salud:"#22c55e",Rutina:"#64748b",Rendercode:"#00e6a7",Desarrollo:"#8b5cf6",Marca:"#ec4899","Hábito":"#06b6d4",Hogar:"#f97316",Ingresos:"#eab308",Personal:"#94a3b8",Estrategia:"#3b82f6","RC/Marca":"#14b8a6"};
const RANKS=["Novato","Aprendiz","Guerrero","Veterano","Maestro","Leyenda","Élite","Titan","Inmortal","Dios del Grind"];
const XPL=200,BONUS=50;

// ===== STATE =====
let user=null; // {email, username}
let S={checks:{},totalXp:0,streak:0,lastDay:null,completedDays:0};
let aDay=(()=>{const d=new Date().getDay();return d===0?6:d-1;})();
let pLvl=0,serverOk=false;

// ===== HELPERS =====
const wk=()=>{const d=new Date();d.setDate(d.getDate()-d.getDay()+1);return d.toISOString().slice(0,10);};
const today=()=>new Date().toISOString().slice(0,10);
function dp(di){const w=wk(),it=DAYS[di].items.filter(i=>!i.skip),dn=it.filter((_,i)=>{const r=DAYS[di].items.indexOf(it[i]);return S.checks[`${w}-${di}-${r}`];}).length;return it.length?Math.round(dn/it.length*100):0;}
function dxp(di){const w=wk();let e=0,t=0;DAYS[di].items.forEach((it,i)=>{if(!it.skip){t+=it.xp;if(S.checks[`${w}-${di}-${i}`])e+=it.xp;}});return{e,t};}

// ===== SERVER API =====
async function api(path,body){
  try{
    const opts=body?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}:{};
    const r=await fetch(path,{...opts,signal:AbortSignal.timeout(3000)});
    const d=await r.json();
    if(!r.ok)return{error:d.error||"Error del servidor"};
    serverOk=true;return d;
  }catch{return{error:null};} // silently fail = offline mode
}

async function syncLoad(){
  if(!user)return;
  // localStorage first (instant)
  const loc=localStorage.getItem(`rcq_${user.email}`);
  if(loc)S=JSON.parse(loc);
  // then server (latest)
  const r=await api(`/api/load?email=${encodeURIComponent(user.email)}`);
  if(r&&!r.error&&r.totalXp!==undefined){
    if(r.totalXp>=S.totalXp)S=r; // server wins if more XP
  }
  pLvl=Math.floor(S.totalXp/XPL);
}
function syncSave(){
  if(!user)return;
  localStorage.setItem(`rcq_${user.email}`,JSON.stringify(S));
  api("/api/save",{email:user.email,...S});
}

// ===== PARTICLES =====
function initP(){const c=document.getElementById("particles");if(c.children.length)return;const cl=["#00e6a7","#3b82f6","#8b5cf6","#f59e0b"];for(let i=0;i<30;i++){const p=document.createElement("div");p.className="particle";p.style.left=Math.random()*100+"%";p.style.top=(40+Math.random()*60)+"%";p.style.animationDelay=Math.random()*6+"s";p.style.animationDuration=(4+Math.random()*5)+"s";p.style.background=cl[i%4];c.appendChild(p);}}

// ===== AUTH =====
async function doAuth(){
  const email=document.getElementById("i-email").value.trim().toLowerCase();
  const uname=document.getElementById("i-user").value.trim();
  const errEl=document.getElementById("l-err");
  const btn=document.getElementById("l-btn");
  errEl.textContent="";
  if(!email||!email.includes("@")){errEl.textContent="Ingresa un correo válido";return;}
  if(!uname||uname.length<2){errEl.textContent="Nombre mínimo 2 caracteres";return;}

  btn.disabled=true;btn.textContent="CONECTANDO...";

  // Try server auth
  const r=await api("/api/auth",{email,username:uname});
  if(r.error){
    // If server unreachable, use local
    if(r.error===null){
      serverOk=false;
      user={email,username:uname};
      localStorage.setItem("rcq_user",JSON.stringify(user));
      await syncLoad();
      enterApp();
      return;
    }
    errEl.textContent=r.error;
    btn.disabled=false;btn.textContent="INICIAR MISIÓN";
    return;
  }
  serverOk=true;
  user={email,username:r.username||uname};
  localStorage.setItem("rcq_user",JSON.stringify(user));
  if(r.data&&r.data.totalXp!==undefined)S=r.data;
  else await syncLoad();
  pLvl=Math.floor(S.totalXp/XPL);
  enterApp();
}

function enterApp(){
  document.getElementById("screen-login").style.display="none";
  document.getElementById("screen-app").style.display="block";
  render();
}

function logout(){
  user=null;
  S={checks:{},totalXp:0,streak:0,lastDay:null,completedDays:0};
  localStorage.removeItem("rcq_user");
  document.getElementById("screen-app").style.display="none";
  document.getElementById("screen-login").style.display="flex";
  renderLogin();
}

// ===== TOGGLE =====
function toggle(di,ii){
  const it=DAYS[di].items[ii];if(it.skip)return;
  const w=wk(),k=`${w}-${di}-${ii}`,was=!!S.checks[k];
  S.checks[k]=!was;
  const items=DAYS[di].items.filter(i=>!i.skip);
  const all=items.every((_,i)=>{const r=DAYS[di].items.indexOf(items[i]);return S.checks[`${w}-${di}-${r}`];});
  let bon=0;
  if(!was){
    S.totalXp+=it.xp;
    if(all){bon=BONUS;S.totalXp+=bon;S.completedDays++;}
    const td=today();
    if(S.lastDay!==td){const y=new Date();y.setDate(y.getDate()-1);S.streak=(S.lastDay===y.toISOString().slice(0,10)||!S.lastDay)?S.streak+1:1;S.lastDay=td;}
    xpPop(it.xp,bon);
  }else S.totalXp=Math.max(0,S.totalXp-it.xp);
  const nl=Math.floor(S.totalXp/XPL);
  if(nl>pLvl&&!was)setTimeout(()=>lvlUp(nl),800);
  pLvl=nl;syncSave();render();
}

function xpPop(xp,bon){const o=document.querySelector(".xp-pop");if(o)o.remove();const d=document.createElement("div");d.className="xp-pop";d.innerHTML=`<div class="xn">+${xp} XP</div>${bon?`<div class="xb">🏆 DÍA COMPLETO +${bon}</div>`:""}`;document.body.appendChild(d);setTimeout(()=>d.remove(),1600);}
function lvlUp(l){const t=RANKS[Math.min(l,RANKS.length-1)];const d=document.createElement("div");d.className="lvl-ov";d.innerHTML=`<div class="lvl-card"><div class="li">⚔️</div><div class="lt">LEVEL UP</div><div class="ll">${l}</div><div class="lr">${t}</div><div class="ld" onclick="this.closest('.lvl-ov').remove()">Toca para continuar</div></div>`;d.onclick=e=>{if(e.target===d)d.remove();};document.body.appendChild(d);}

// ===== RENDER LOGIN =====
function renderLogin(){
  const saved=localStorage.getItem("rcq_user");
  const su=saved?JSON.parse(saved):null;
  document.getElementById("screen-login").innerHTML=`
  <div class="lbox">
    <span class="logo-i">⚔️</span>
    <div class="logo-t"><span class="c1">RENDER</span><span class="c2">CODE</span></div>
    <div class="logo-s">— Q U E S T —</div>
    <div class="ltag">Convierte tu rutina en una <b>misión diaria</b>.<br>Gana XP, sube de nivel, domina tu día.</div>
    <div class="lcard">
      <h3>INICIAR SESIÓN</h3>
      <input class="linp" id="i-user" type="text" placeholder="Nombre de usuario" value="${su?su.username:""}" autocomplete="username" autocapitalize="words">
      <input class="linp" id="i-email" type="email" placeholder="Correo electrónico" value="${su?su.email:""}" autocomplete="email" inputmode="email">
      <button class="lbtn" id="l-btn" onclick="doAuth()">INICIAR MISIÓN</button>
      <div class="lerr" id="l-err"></div>
      <div class="lsync"><span class="dot ${serverOk?"on":"off"}"></span>${serverOk?"Servidor conectado — sync activo":"Modo local — tus datos se guardan aquí"}</div>
    </div>
  </div>`;
  document.querySelectorAll(".linp").forEach(i=>i.addEventListener("keydown",e=>{if(e.key==="Enter")doAuth();}));
  // Check server status
  api("/api/load?email=ping").then(()=>{
    const dot=document.querySelector(".lsync .dot");
    const txt=document.querySelector(".lsync");
    if(dot&&serverOk){dot.className="dot on";txt.innerHTML='<span class="dot on"></span>Servidor conectado — sync entre dispositivos';}
  });
}

// ===== RENDER APP =====
function render(){
  if(!user)return;
  const lv=Math.floor(S.totalXp/XPL),xil=S.totalXp%XPL,rk=RANKS[Math.min(lv,RANKS.length-1)];
  const day=DAYS[aDay],pct=dp(aDay),{e:xe,t:xt}=dxp(aDay),w=wk();
  document.getElementById("screen-app").innerHTML=`
  <div class="topbar"><div class="topbar-inner">
    <div class="brand"><span class="rc">RENDER</span>CODE<span class="qt">QUEST</span></div>
    <div style="display:flex;gap:6px;align-items:center">
      <div class="streak-badge">🔥 ${S.streak}</div>
      <button class="ubtn" onclick="logout()"><div class="ua">${lv}</div><span>${user.username}</span></button>
    </div>
  </div></div>

  <div class="pcard"><div class="pcard-in">
    <div class="pc-top">
      <div class="avatar">${lv}<div class="ring"></div></div>
      <div class="pc-info"><div class="pc-rank">${rk}</div><div class="pc-name">${user.username}</div><div class="pc-email">${user.email}</div></div>
      <button class="ubtn" onclick="document.getElementById('wb').style.display=document.getElementById('wb').style.display==='none'?'flex':'none'" style="font-size:16px;padding:6px 8px">📊</button>
    </div>
    <div class="xp-text"><span>LV ${lv}</span><span>${S.totalXp} XP · ${xil}/${XPL} next</span></div>
    <div class="xp-bg"><div class="xp-fill" style="width:${xil/XPL*100}%"></div></div>
  </div></div>

  <div class="stats">
    <div class="st"><div class="sv" style="color:#00e6a7">${S.totalXp}</div><div class="sl">XP TOTAL</div></div>
    <div class="st"><div class="sv" style="color:#f59e0b">${S.completedDays}</div><div class="sl">DÍAS 100%</div></div>
    <div class="st"><div class="sv" style="color:#8b5cf6">${lv}</div><div class="sl">NIVEL</div></div>
  </div>

  <div id="wb" class="wbars" style="display:none">
    ${DAYS.map((d,i)=>{const p=dp(i);return`<div class="wb"><div class="wbg"><div class="wbf" style="height:${p}%;background:linear-gradient(180deg,${d.color}cc,${d.color}44)"></div><div class="wbp">${p}%</div></div><div class="wbd">${d.name}</div></div>`;}).join("")}
  </div>

  <div class="dtabs">
    ${DAYS.map((d,i)=>{const p=dp(i);return`<div class="dtab ${i===aDay?"on":""} ${p===100?"dn":""}" onclick="aDay=${i};render()"><div class="di">${d.icon}</div><div>${d.name}</div><div class="dp">${p}%</div></div>`;}).join("")}
  </div>

  <div class="dhdr">
    <div><h2>${day.full}</h2><div class="dtag" style="color:${day.color}">${day.tag}</div></div>
    <div style="text-align:right"><div class="dpct ${pct===100?"ok":""}" style="color:${pct===100?"":"#fff"}">${pct}%</div><div class="dsub">${xe}/${xt} XP</div></div>
  </div>
  <div class="dprog"><div class="bar"><div class="fill" style="width:${pct}%;background:linear-gradient(90deg,${day.color},${day.color}88);${pct===100?"box-shadow:0 0 12px "+day.color+"88":""}"></div></div></div>

  <div class="qlist">
    ${day.items.map((it,idx)=>{const k=`${w}-${aDay}-${idx}`,ch=!!S.checks[k],c=CC[it.cat]||"#64748b";
    return`<div class="q ${it.key?"key":""} ${ch?"chk":""} ${it.skip?"sk":""}" onclick="toggle(${aDay},${idx})" style="animation-delay:${idx*.04}s">
      <div class="qc">${ch?"✓":""}</div>
      <div class="qb"><div class="qt">${it.a}</div><div class="qm"><span class="qtime" style="color:${day.color}">${it.t}</span><span class="qcat" style="color:${c};background:${c}15">${it.cat}</span></div></div>
      ${!it.skip&&it.xp?`<div class="qxp">+${it.xp}</div>`:""}</div>`;}).join("")}
  </div>`;
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded",async()=>{
  initP();
  // Auto-login
  const saved=localStorage.getItem("rcq_user");
  if(saved){
    user=JSON.parse(saved);
    await syncLoad();
    enterApp();
  } else renderLogin();
});
