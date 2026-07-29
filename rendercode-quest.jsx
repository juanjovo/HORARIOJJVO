import { useState, useEffect, useCallback } from "react";

const DAYS = [
  { name: "LUN", full: "LUNES", tag: "12K + Rendercode", icon: "🏃", color: "#00B894",
    items: [
      { t: "5:30", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "6:00-7:30", a: "Correr 12K", cat: "Salud", xp: 30, key: true },
      { t: "7:30-8:30", a: "Ducha + desayuno + agenda", cat: "Rutina", xp: 5 },
      { t: "8:30-9:00", a: "RC: Aprendizaje", cat: "Rendercode", xp: 15 },
      { t: "9:00-10:00", a: "RC: Búsqueda de Clientes", cat: "Rendercode", xp: 20, key: true },
      { t: "10:00-10:30", a: "RC: Filtrar Clientes", cat: "Rendercode", xp: 15 },
      { t: "10:30-11:30", a: "RC: Crear Página + Filtrar", cat: "Rendercode", xp: 25, key: true },
      { t: "11:30-12:00", a: "Leer 10 páginas", cat: "Desarrollo", xp: 10 },
      { t: "12:00-13:00", a: "Almuerzo", cat: "Rutina", xp: 0, skip: true },
      { t: "13:00-14:00", a: "Contenido marca personal", cat: "Marca", xp: 20 },
      { t: "14:00-14:30", a: "Inglés 30min", cat: "Desarrollo", xp: 15 },
      { t: "19:00", a: "Cierre del día", cat: "Hábito", xp: 10 },
      { t: "22:00", a: "Dormir", cat: "Salud", xp: 5 },
    ]},
  { name: "MAR", full: "MARTES", tag: "Rendercode + Cerro 7pm", icon: "⛰️", color: "#1E3A8A",
    items: [
      { t: "5:30", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "6:00-7:00", a: "Ejercicio", cat: "Salud", xp: 20 },
      { t: "7:00-8:00", a: "Ducha + desayuno", cat: "Rutina", xp: 5 },
      { t: "8:00-8:30", a: "RC: Aprendizaje", cat: "Rendercode", xp: 15 },
      { t: "8:30-9:30", a: "RC: Búsqueda de Clientes", cat: "Rendercode", xp: 20, key: true },
      { t: "9:30-10:00", a: "RC: Filtrar Clientes", cat: "Rendercode", xp: 15 },
      { t: "10:00-11:00", a: "RC: Crear Página + Filtrar", cat: "Rendercode", xp: 25, key: true },
      { t: "11:00-11:30", a: "Leer 10 páginas", cat: "Desarrollo", xp: 10 },
      { t: "11:30-12:30", a: "Almuerzo", cat: "Rutina", xp: 0, skip: true },
      { t: "12:30-13:30", a: "Contenido marca personal", cat: "Marca", xp: 20 },
      { t: "13:30-14:00", a: "Curso gratis 30min", cat: "Desarrollo", xp: 15 },
      { t: "19:00", a: "Cerro de las Tres Cruces", cat: "Salud", xp: 30, key: true },
      { t: "22:00", a: "Dormir", cat: "Salud", xp: 5 },
    ]},
  { name: "MIÉ", full: "MIÉRCOLES", tag: "Rendercode + Inglés", icon: "💻", color: "#7C3AED",
    items: [
      { t: "5:30", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "6:00-7:00", a: "Ejercicio", cat: "Salud", xp: 20 },
      { t: "7:00-8:00", a: "Ducha + desayuno", cat: "Rutina", xp: 5 },
      { t: "8:00-8:30", a: "RC: Aprendizaje", cat: "Rendercode", xp: 15 },
      { t: "8:30-9:30", a: "RC: Búsqueda de Clientes", cat: "Rendercode", xp: 20, key: true },
      { t: "9:30-10:00", a: "RC: Filtrar Clientes", cat: "Rendercode", xp: 15 },
      { t: "10:00-11:00", a: "RC: Crear Página + Filtrar", cat: "Rendercode", xp: 25, key: true },
      { t: "11:00-11:30", a: "Leer 10 páginas", cat: "Desarrollo", xp: 10 },
      { t: "11:30-12:30", a: "Almuerzo", cat: "Rutina", xp: 0, skip: true },
      { t: "12:30-13:30", a: "Contenido marca personal", cat: "Marca", xp: 20 },
      { t: "13:30-14:00", a: "Inglés 30min", cat: "Desarrollo", xp: 15 },
      { t: "19:00", a: "Cierre del día", cat: "Hábito", xp: 10 },
      { t: "22:00", a: "Dormir", cat: "Salud", xp: 5 },
    ]},
  { name: "JUE", full: "JUEVES", tag: "Rendercode + Iglesia 7pm", icon: "⛪", color: "#F59E0B",
    items: [
      { t: "5:30", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "6:00-7:00", a: "Ejercicio", cat: "Salud", xp: 20 },
      { t: "7:00-8:00", a: "Ducha + desayuno", cat: "Rutina", xp: 5 },
      { t: "8:00-8:30", a: "RC: Aprendizaje", cat: "Rendercode", xp: 15 },
      { t: "8:30-9:30", a: "RC: Búsqueda de Clientes", cat: "Rendercode", xp: 20, key: true },
      { t: "9:30-10:00", a: "RC: Filtrar Clientes", cat: "Rendercode", xp: 15 },
      { t: "10:00-11:00", a: "RC: Crear Página + Filtrar", cat: "Rendercode", xp: 25, key: true },
      { t: "11:00-11:30", a: "Leer 10 páginas", cat: "Desarrollo", xp: 10 },
      { t: "11:30-12:30", a: "Almuerzo", cat: "Rutina", xp: 0, skip: true },
      { t: "12:30-13:30", a: "Contenido marca personal", cat: "Marca", xp: 20 },
      { t: "13:30-14:00", a: "Curso gratis 30min", cat: "Desarrollo", xp: 15 },
      { t: "19:00", a: "Iglesia + Santísimo", cat: "Fe", xp: 20, key: true },
      { t: "22:00", a: "Dormir", cat: "Salud", xp: 5 },
    ]},
  { name: "VIE", full: "VIERNES", tag: "Rendercode + Lavar vehículos", icon: "🚗", color: "#DC2626",
    items: [
      { t: "5:30", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "6:00-7:00", a: "Ejercicio", cat: "Salud", xp: 20 },
      { t: "7:00-8:00", a: "Ducha + desayuno", cat: "Rutina", xp: 5 },
      { t: "8:00-8:30", a: "RC: Aprendizaje", cat: "Rendercode", xp: 15 },
      { t: "8:30-9:30", a: "RC: Búsqueda de Clientes", cat: "Rendercode", xp: 20, key: true },
      { t: "9:30-10:00", a: "RC: Filtrar Clientes", cat: "Rendercode", xp: 15 },
      { t: "10:00-11:00", a: "RC: Crear Página + Filtrar", cat: "Rendercode", xp: 25, key: true },
      { t: "11:00-11:30", a: "Leer 10 páginas", cat: "Desarrollo", xp: 10 },
      { t: "11:30-12:30", a: "Almuerzo", cat: "Rutina", xp: 0, skip: true },
      { t: "12:30-13:30", a: "Contenido marca personal", cat: "Marca", xp: 20 },
      { t: "14:00-14:40", a: "Lavar el Carro", cat: "Hogar", xp: 10 },
      { t: "14:40-15:00", a: "Lavar la Moto", cat: "Hogar", xp: 10 },
      { t: "19:00", a: "Cierre semana", cat: "Hábito", xp: 10 },
      { t: "22:00", a: "Dormir", cat: "Salud", xp: 5 },
    ]},
  { name: "SÁB", full: "SÁBADO", tag: "Rappi jornada", icon: "🛵", color: "#F97316",
    items: [
      { t: "5:30", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "7:00-8:00", a: "Desayuno + alistarse", cat: "Rutina", xp: 5 },
      { t: "8:00-14:00", a: "Rappi — jornada completa", cat: "Ingresos", xp: 40, key: true },
      { t: "14:00-15:00", a: "Almuerzo", cat: "Rutina", xp: 0, skip: true },
      { t: "15:00-17:00", a: "Contenido / pendientes RC", cat: "RC/Marca", xp: 15 },
      { t: "17:00", a: "Libre / descanso", cat: "Personal", xp: 0, skip: true },
    ]},
  { name: "DOM", full: "DOMINGO", tag: "Aseo + Descanso", icon: "🧹", color: "#6B7280",
    items: [
      { t: "Libre", a: "Despertar + Biblia", cat: "Fe", xp: 10 },
      { t: "Mañana", a: "Aseo de la casa", cat: "Hogar", xp: 20, key: true },
      { t: "Hasta 2pm", a: "Terminar aseo máx 2pm", cat: "Hogar", xp: 10 },
      { t: "Tarde 1h", a: "Planeación semana (Notion)", cat: "Estrategia", xp: 15 },
      { t: "Tarde", a: "Leer 10 páginas", cat: "Desarrollo", xp: 10 },
      { t: "Tarde", a: "Descanso / familia", cat: "Personal", xp: 0, skip: true },
      { t: "Temprano", a: "Dormir — reinicia 5:30am", cat: "Salud", xp: 5 },
    ]},
];

const CAT_COLORS = { Fe: "#F59E0B", Salud: "#22C55E", Rutina: "#64748B", Rendercode: "#00B894", Desarrollo: "#8B5CF6", Marca: "#EC4899", Hábito: "#06B6D4", Hogar: "#F97316", Ingresos: "#EAB308", Personal: "#94A3B8", Estrategia: "#3B82F6", "RC/Marca": "#14B8A6" };

const TITLES = ["Novato", "Aprendiz", "Guerrero", "Veterano", "Maestro", "Leyenda", "Élite", "Titan", "Inmortal", "Dios del Grind"];
const XP_PER_LVL = 200;
const BONUS_ALL = 50;

const getWeekKey = () => { const d = new Date(); d.setDate(d.getDate() - d.getDay() + 1); return d.toISOString().slice(0, 10); };
const getTodayKey = () => new Date().toISOString().slice(0, 10);
const getDayIdx = () => { const d = new Date().getDay(); return d === 0 ? 6 : d - 1; };

export default function App() {
  const [activeDay, setActiveDay] = useState(getDayIdx());
  const [data, setData] = useState({ checks: {}, totalXp: 0, streak: 0, lastDay: null, completedDays: 0 });
  const [loaded, setLoaded] = useState(false);
  const [flash, setFlash] = useState(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("rc-quest-data");
        if (r?.value) setData(JSON.parse(r.value));
      } catch {}
      setLoaded(true);
    })();
  }, []);

  const save = useCallback(async (d) => {
    try { await window.storage.set("rc-quest-data", JSON.stringify(d)); } catch {}
  }, []);

  const toggle = (dayIdx, itemIdx) => {
    const k = `${getWeekKey()}-${dayIdx}-${itemIdx}`;
    const item = DAYS[dayIdx].items[itemIdx];
    if (item.skip) return;

    setData(prev => {
      const was = !!prev.checks[k];
      const xpDelta = was ? -item.xp : item.xp;
      const checks = { ...prev.checks, [k]: !was };

      // Check if all day items done for bonus
      const dayItems = DAYS[dayIdx].items.filter(i => !i.skip);
      const allDone = dayItems.every((_, i) => {
        const realIdx = DAYS[dayIdx].items.indexOf(dayItems[i]);
        return checks[`${getWeekKey()}-${dayIdx}-${realIdx}`];
      });
      const wasDayDone = dayItems.every((_, i) => {
        const realIdx = DAYS[dayIdx].items.indexOf(dayItems[i]);
        return prev.checks[`${getWeekKey()}-${dayIdx}-${realIdx}`];
      });

      let bonus = 0;
      if (allDone && !wasDayDone) bonus = BONUS_ALL;
      if (!allDone && wasDayDone) bonus = -BONUS_ALL;

      const today = getTodayKey();
      let streak = prev.streak;
      if (!was && prev.lastDay !== today) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        if (prev.lastDay === yesterday.toISOString().slice(0, 10) || !prev.lastDay) streak += 1;
        else if (prev.lastDay !== today) streak = 1;
      }

      const newData = {
        ...prev, checks,
        totalXp: Math.max(0, prev.totalXp + xpDelta + bonus),
        streak, lastDay: today,
        completedDays: prev.completedDays + (allDone && !wasDayDone ? 1 : 0) + (!allDone && wasDayDone ? -1 : 0),
      };

      if (!was && item.xp > 0) setFlash({ xp: item.xp + (bonus > 0 ? bonus : 0), msg: bonus > 0 ? "DÍA COMPLETO!" : null });
      save(newData);
      return newData;
    });
  };

  useEffect(() => { if (flash) { const t = setTimeout(() => setFlash(null), 1500); return () => clearTimeout(t); } }, [flash]);

  const resetAll = async () => { const d = { checks: {}, totalXp: 0, streak: 0, lastDay: null, completedDays: 0 }; setData(d); save(d); };

  const level = Math.floor(data.totalXp / XP_PER_LVL);
  const xpInLvl = data.totalXp % XP_PER_LVL;
  const title = TITLES[Math.min(level, TITLES.length - 1)];
  const day = DAYS[activeDay];
  const wk = getWeekKey();
  const checkable = day.items.filter(i => !i.skip);
  const done = checkable.filter((it, i) => { const ri = day.items.indexOf(checkable[i]); return data.checks[`${wk}-${activeDay}-${ri}`]; }).length;
  const pct = checkable.length ? Math.round((done / checkable.length) * 100) : 0;
  const dayXpEarned = day.items.reduce((s, it, i) => s + (data.checks[`${wk}-${activeDay}-${i}`] && !it.skip ? it.xp : 0), 0);
  const dayXpTotal = day.items.reduce((s, it) => s + (it.skip ? 0 : it.xp), 0);

  const weekDone = DAYS.map((d, di) => {
    const ch = d.items.filter(i => !i.skip);
    const dn = ch.filter((_, i) => { const ri = d.items.indexOf(ch[i]); return data.checks[`${wk}-${di}-${ri}`]; }).length;
    return ch.length ? Math.round((dn / ch.length) * 100) : 0;
  });

  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif", background: "linear-gradient(180deg,#0a0e1a 0%,#111827 100%)", minHeight: "100vh", color: "#e2e8f0", position: "relative", overflow: "hidden" }}>
      {/* Animated bg particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.15 }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{ position: "absolute", width: 2, height: 2, background: "#00B894", borderRadius: "50%",
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 3}s`,
          }} />
        ))}
      </div>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0) scale(1);opacity:0.3} 50%{transform:translateY(-30px) scale(1.5);opacity:1} }
        @keyframes popIn { 0%{transform:scale(0.5);opacity:0} 50%{transform:scale(1.2)} 100%{transform:scale(1);opacity:1} }
        @keyframes slideUp { 0%{transform:translateY(20px);opacity:0} 100%{transform:translateY(0);opacity:1} }
        @keyframes xpFloat { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(-60px);opacity:0} }
        @keyframes glow { 0%,100%{box-shadow:0 0 5px rgba(0,184,148,0.3)} 50%{box-shadow:0 0 20px rgba(0,184,148,0.6)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
      `}</style>

      {/* XP Float notification */}
      {flash && (
        <div style={{ position: "fixed", top: "30%", left: "50%", transform: "translateX(-50%)", zIndex: 100, textAlign: "center", animation: "xpFloat 1.5s forwards", pointerEvents: "none" }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#00B894", textShadow: "0 0 20px rgba(0,184,148,0.8)" }}>+{flash.xp} XP</div>
          {flash.msg && <div style={{ fontSize: 18, fontWeight: 800, color: "#F59E0B", textShadow: "0 0 15px rgba(245,158,11,0.8)", marginTop: 4 }}>{flash.msg}</div>}
        </div>
      )}

      {/* Header - Player card */}
      <div style={{ position: "relative", zIndex: 1, padding: "14px 16px 10px", background: "linear-gradient(135deg,rgba(0,184,148,0.1),rgba(30,58,138,0.1))", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#00B894,#1E3A8A)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff", border: "2px solid rgba(0,184,148,0.5)", animation: level > 0 ? "glow 2s infinite" : "none" }}>
              {level}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#00B894", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{title}</div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>
                <span style={{ color: "#fff" }}>Render</span><span style={{ color: "#00B894" }}>code</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ textAlign: "center", background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "4px 10px" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#F59E0B" }}>🔥 {data.streak}</div>
              <div style={{ fontSize: 8, color: "#64748b" }}>RACHA</div>
            </div>
            <button onClick={() => setShowStats(!showStats)} style={{ background: "rgba(255,255,255,0.05)", border: "none", color: "#94a3b8", fontSize: 18, padding: "6px 10px", borderRadius: 8, cursor: "pointer" }}>📊</button>
          </div>
        </div>
        {/* XP Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 9, color: "#64748b", minWidth: 30 }}>LV {level}</div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 10, height: 8, overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: 10, background: "linear-gradient(90deg,#00B894,#1E3A8A)", width: `${(xpInLvl / XP_PER_LVL) * 100}%`, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)", boxShadow: "0 0 8px rgba(0,184,148,0.5)" }} />
          </div>
          <div style={{ fontSize: 9, color: "#64748b", minWidth: 60, textAlign: "right" }}>{xpInLvl}/{XP_PER_LVL} XP</div>
        </div>
      </div>

      {/* Stats panel */}
      {showStats && (
        <div style={{ padding: 16, background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.05)", animation: "slideUp 0.3s ease" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
            <div style={{ background: "rgba(0,184,148,0.1)", borderRadius: 10, padding: "8px 10px", textAlign: "center", border: "1px solid rgba(0,184,148,0.2)" }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#00B894" }}>{data.totalXp}</div>
              <div style={{ fontSize: 9, color: "#64748b" }}>XP TOTAL</div>
            </div>
            <div style={{ background: "rgba(245,158,11,0.1)", borderRadius: 10, padding: "8px 10px", textAlign: "center", border: "1px solid rgba(245,158,11,0.2)" }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#F59E0B" }}>{data.completedDays}</div>
              <div style={{ fontSize: 9, color: "#64748b" }}>DÍAS 100%</div>
            </div>
            <div style={{ background: "rgba(124,58,237,0.1)", borderRadius: 10, padding: "8px 10px", textAlign: "center", border: "1px solid rgba(124,58,237,0.2)" }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#8B5CF6" }}>{level}</div>
              <div style={{ fontSize: 9, color: "#64748b" }}>NIVEL</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: "#64748b", marginBottom: 6 }}>PROGRESO SEMANAL</div>
          <div style={{ display: "flex", gap: 4 }}>
            {DAYS.map((d, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ height: 50, background: "rgba(255,255,255,0.05)", borderRadius: 6, position: "relative", overflow: "hidden", marginBottom: 3 }}>
                  <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${weekDone[i]}%`, background: `linear-gradient(180deg,${d.color}88,${d.color}33)`, borderRadius: 6, transition: "height 0.5s" }} />
                  <div style={{ position: "relative", paddingTop: 4, fontSize: 10, fontWeight: 700, color: weekDone[i] === 100 ? "#00B894" : "#fff" }}>{weekDone[i]}%</div>
                </div>
                <div style={{ fontSize: 8, color: "#64748b" }}>{d.name}</div>
              </div>
            ))}
          </div>
          <button onClick={resetAll} style={{ marginTop: 10, width: "100%", background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", color: "#f87171", fontSize: 10, padding: "6px", borderRadius: 6, cursor: "pointer" }}>Reset todo el progreso</button>
        </div>
      )}

      {/* Day tabs */}
      <div style={{ display: "flex", overflowX: "auto", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.2)" }}>
        {DAYS.map((d, i) => (
          <button key={i} onClick={() => setActiveDay(i)} style={{
            flex: "1 0 auto", padding: "8px 6px 10px", background: "transparent", border: "none",
            borderBottom: i === activeDay ? `3px solid ${d.color}` : "3px solid transparent",
            color: i === activeDay ? "#fff" : "#475569", cursor: "pointer", textAlign: "center", minWidth: 48, transition: "all 0.2s",
          }}>
            <div style={{ fontSize: 16, marginBottom: 1 }}>{d.icon}</div>
            <div style={{ fontSize: 9, fontWeight: i === activeDay ? 800 : 500 }}>{d.name}</div>
            {weekDone[i] === 100 && <div style={{ fontSize: 8, color: "#00B894" }}>✓</div>}
          </button>
        ))}
      </div>

      {/* Day header + progress */}
      <div style={{ padding: "12px 16px 8px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 900, letterSpacing: -0.5 }}>{day.full}</h2>
            <span style={{ fontSize: 11, color: day.color, fontWeight: 600 }}>{day.tag}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: pct === 100 ? "#00B894" : "#fff", animation: pct === 100 ? "pulse 1s infinite" : "none" }}>{pct}%</div>
            <div style={{ fontSize: 9, color: "#64748b" }}>{dayXpEarned}/{dayXpTotal} XP</div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, height: 6, marginTop: 8, overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 10, background: pct === 100 ? "linear-gradient(90deg,#00B894,#22C55E)" : `linear-gradient(90deg,${day.color},${day.color}88)`, width: `${pct}%`, transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)", boxShadow: pct === 100 ? "0 0 12px rgba(0,184,148,0.6)" : "none" }} />
        </div>
      </div>

      {/* Quest list */}
      <div style={{ padding: "4px 16px 80px", position: "relative", zIndex: 1 }}>
        {day.items.map((item, idx) => {
          const k = `${wk}-${activeDay}-${idx}`;
          const checked = !!data.checks[k];
          const isSkip = item.skip;
          return (
            <div key={idx} onClick={() => !isSkip && toggle(activeDay, idx)}
              style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", marginBottom: 4,
                background: checked ? "rgba(0,184,148,0.06)" : item.key ? `linear-gradient(135deg,rgba(255,255,255,0.04),${day.color}11)` : "rgba(255,255,255,0.03)",
                borderRadius: 10, cursor: isSkip ? "default" : "pointer",
                border: item.key && !checked ? `1px solid ${day.color}33` : "1px solid transparent",
                opacity: isSkip ? 0.4 : checked ? 0.55 : 1, transition: "all 0.25s",
                animation: checked ? "none" : "slideUp 0.3s ease",
              }}>
              {!isSkip ? (
                <div style={{
                  width: 24, height: 24, borderRadius: 8, flexShrink: 0, transition: "all 0.3s",
                  background: checked ? "linear-gradient(135deg,#00B894,#059669)" : "transparent",
                  border: checked ? "none" : "2px solid #334155",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: checked ? "0 0 10px rgba(0,184,148,0.4)" : "none",
                  animation: checked ? "popIn 0.3s ease" : "none",
                }}>
                  {checked && <span style={{ color: "#fff", fontSize: 14, fontWeight: 900 }}>✓</span>}
                </div>
              ) : <div style={{ width: 24, height: 24, flexShrink: 0 }} />}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: item.key ? 700 : 400, color: checked ? "#475569" : "#e2e8f0", textDecoration: checked ? "line-through" : "none" }}>{item.a}</div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 2 }}>
                  <span style={{ fontSize: 10, color: day.color, fontWeight: 600 }}>{item.t}</span>
                  <span style={{ fontSize: 9, color: CAT_COLORS[item.cat] || "#64748b", background: `${CAT_COLORS[item.cat] || "#64748b"}15`, padding: "1px 6px", borderRadius: 4 }}>{item.cat}</span>
                </div>
              </div>
              {!isSkip && item.xp > 0 && (
                <div style={{ fontSize: 11, fontWeight: 800, color: checked ? "#065f46" : "#00B894", background: checked ? "rgba(0,184,148,0.1)" : "rgba(0,184,148,0.1)", padding: "2px 8px", borderRadius: 6, flexShrink: 0 }}>
                  +{item.xp}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
