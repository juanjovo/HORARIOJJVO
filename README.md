# ⚔️ Rendercode Quest

**Gamified daily routine tracker** — Sistema de productividad tipo videojuego con XP, niveles, rachas y seguimiento diario.

![Rendercode Quest](https://img.shields.io/badge/Rendercode-Quest-00e6a7?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7imqTvuI88L3RleHQ+PC9zdmc+)

## 🎮 Features

- **Sistema de XP** — Cada tarea completada da XP según importancia (5-40 XP)
- **10 Rangos** — Novato → Aprendiz → Guerrero → Veterano → Maestro → Leyenda → Élite → Titan → Inmortal → Dios del Grind
- **Racha diaria** — Contador de días consecutivos activo
- **Bonus +50 XP** por completar el 100% del día
- **Level Up** con animación cinematográfica
- **Partículas animadas** y efectos neon
- **Persistencia** — localStorage (Vercel) o SQLite (self-hosted)
- **Mobile-first** — Optimizado para celular y PC

## 🚀 Deploy en Vercel (recomendado)

### Opción 1: Desde GitHub

1. Sube este repo a GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/HORARIOJJVO.git
git push -u origin main
```

2. Ve a [vercel.com](https://vercel.com) → New Project
3. Importa tu repo de GitHub
4. **Framework Preset:** `Other`
5. **Build Command:** dejar vacío
6. **Output Directory:** `.`
7. Click **Deploy**

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🖥️ Ejecutar local

### Solo frontend (sin Python):
```bash
# Con Python
python3 -m http.server 8000

# O con Node
npx serve .
```
Abre `http://localhost:8000`

### Con backend Python (persistencia en servidor):
```bash
pip install -r requirements.txt
python server.py
```
Abre `http://localhost:5000`

## 📁 Estructura

```
HORARIOJJVO/
├── index.html          # HTML principal
├── style.css           # Estilos gaming (Orbitron, neon, particles)
├── app.js              # Lógica del juego (XP, niveles, quests)
├── server.py           # Backend Python (opcional, para self-hosting)
├── requirements.txt    # Dependencias Python
├── vercel.json         # Config de Vercel
├── .gitignore          # Git ignore
└── README.md           # Este archivo
```

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (custom properties, animations), Vanilla JS
- **Backend (opcional):** Flask + SQLite
- **Fonts:** Orbitron (gaming), Inter (UI)
- **Deploy:** Vercel, GitHub Pages, Render, Railway

## 📱 PWA Ready

La app es mobile-first y se puede instalar como PWA en iOS y Android.

---

**Rendercode** — Código que cobra vida. Soluciones que impulsan tu negocio.
