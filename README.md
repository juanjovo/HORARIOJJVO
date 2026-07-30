# ⚔️ Rendercode Quest

Gamified daily routine tracker con sync multi-dispositivo.

## 🚀 Deploy (Render.com — recomendado para sync)

1. Sube a GitHub:
```bash
cd HORARIOJJVO
git init && git add . && git commit -m "v1"
git remote add origin https://github.com/TU_USUARIO/HORARIOJJVO.git
git push -u origin main
```

2. Ve a [render.com](https://render.com) → New Web Service
3. Conecta tu repo de GitHub
4. Settings:
   - **Runtime:** Python
   - **Build:** `pip install -r requirements.txt`
   - **Start:** `gunicorn server:app --bind 0.0.0.0:$PORT`
5. Deploy → listo, multi-dispositivo sync.

## 📱 Deploy estático (Vercel — sin sync)
```bash
npm i -g vercel && vercel
```
Funciona pero datos solo en localStorage (un dispositivo).

## 🔐 Login
- Nombre de usuario + correo electrónico
- Mismo correo + nombre = mismo usuario en cualquier dispositivo
- No requiere contraseña

## 🎮 Features
- Sistema XP con 10 rangos (Novato → Dios del Grind)
- Racha diaria, bonus por día 100%, level up animado
- Sync automático entre celular y PC
- PWA ready
