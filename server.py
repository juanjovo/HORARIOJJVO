"""
Rendercode Quest — Server
Deploy en Render.com (gratis) para sync multi-dispositivo.
"""
from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import sqlite3, json, os

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)
DB = os.environ.get("DB_PATH", "quest.db")

def db():
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    return conn

def init():
    c = db()
    c.execute("""CREATE TABLE IF NOT EXISTS users (
        email TEXT PRIMARY KEY,
        username TEXT NOT NULL,
        data TEXT DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )""")
    c.commit(); c.close()

init()

@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/api/auth", methods=["POST"])
def auth():
    """Login o registro automático con email + username."""
    d = request.json
    email = (d.get("email") or "").lower().strip()
    username = (d.get("username") or "").strip()
    if not email or "@" not in email:
        return jsonify({"error": "Correo inválido"}), 400
    if not username or len(username) < 2:
        return jsonify({"error": "Nombre muy corto (mín. 2)"}), 400

    c = db()
    row = c.execute("SELECT username, data FROM users WHERE email=?", (email,)).fetchone()

    if row:
        # Ya existe → verificar username
        if row["username"].lower() != username.lower():
            c.close()
            return jsonify({"error": "El correo ya está registrado con otro nombre"}), 403
        data = json.loads(row["data"]) if row["data"] else {}
        c.close()
        return jsonify({"ok": True, "username": row["username"], "data": data, "isNew": False})
    else:
        # Nuevo usuario → registrar
        c.execute("INSERT INTO users (email, username) VALUES (?, ?)", (email, username))
        c.commit(); c.close()
        return jsonify({"ok": True, "username": username, "data": {}, "isNew": True})

@app.route("/api/save", methods=["POST"])
def save():
    d = request.json
    email = (d.get("email") or "").lower().strip()
    if not email:
        return jsonify({"error": "Sin email"}), 400
    payload = {k: v for k, v in d.items() if k != "email"}
    c = db()
    c.execute("UPDATE users SET data=?, updated_at=CURRENT_TIMESTAMP WHERE email=?",
              (json.dumps(payload), email))
    c.commit(); c.close()
    return jsonify({"ok": True})

@app.route("/api/load", methods=["GET"])
def load():
    email = (request.args.get("email") or "").lower().strip()
    if not email:
        return jsonify({}), 400
    c = db()
    row = c.execute("SELECT data, username FROM users WHERE email=?", (email,)).fetchone()
    c.close()
    if row and row["data"]:
        data = json.loads(row["data"])
        data["username"] = row["username"]
        return jsonify(data)
    return jsonify({"checks": {}, "totalXp": 0, "streak": 0, "lastDay": None, "completedDays": 0})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
