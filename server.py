"""
Rendercode Quest — Backend Python con soporte multi-usuario
Opcional: en Vercel funciona sin esto (usa localStorage).
Para hosting propio: Render, Railway, VPS.
"""
from flask import Flask, send_from_directory, request, jsonify
import sqlite3, json, os, hashlib

app = Flask(__name__, static_folder=".", static_url_path="")
DB = "quest.db"

def get_db():
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    db = get_db()
    db.execute("""CREATE TABLE IF NOT EXISTS users (
        username TEXT PRIMARY KEY,
        password_hash TEXT NOT NULL,
        display_name TEXT,
        data TEXT DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )""")
    db.commit(); db.close()

init_db()

def hash_pw(pw):
    return hashlib.sha256(pw.encode()).hexdigest()

@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/api/register", methods=["POST"])
def register():
    d = request.json
    username = d.get("username","").lower().strip()
    password = d.get("password","")
    if len(username) < 2: return jsonify({"error": "Usuario muy corto"}), 400
    if len(password) < 4: return jsonify({"error": "Contraseña muy corta"}), 400
    db = get_db()
    if db.execute("SELECT 1 FROM users WHERE username=?", (username,)).fetchone():
        db.close(); return jsonify({"error": "Usuario ya existe"}), 400
    db.execute("INSERT INTO users (username, password_hash, display_name) VALUES (?,?,?)",
               (username, hash_pw(password), d.get("displayName", username)))
    db.commit(); db.close()
    return jsonify({"ok": True})

@app.route("/api/login", methods=["POST"])
def login():
    d = request.json
    username = d.get("username","").lower().strip()
    db = get_db()
    row = db.execute("SELECT password_hash, display_name FROM users WHERE username=?", (username,)).fetchone()
    db.close()
    if not row: return jsonify({"error": "Usuario no encontrado"}), 404
    if row["password_hash"] != hash_pw(d.get("password","")): return jsonify({"error": "Contraseña incorrecta"}), 401
    return jsonify({"ok": True, "displayName": row["display_name"]})

@app.route("/api/load", methods=["GET"])
def load():
    user = request.args.get("user","").lower()
    db = get_db()
    row = db.execute("SELECT data FROM users WHERE username=?", (user,)).fetchone()
    db.close()
    if row and row["data"]:
        return jsonify(json.loads(row["data"]))
    return jsonify({"checks":{},"totalXp":0,"streak":0,"lastDay":None,"completedDays":0})

@app.route("/api/save", methods=["POST"])
def save():
    d = request.json
    user = d.pop("user","").lower()
    data = json.dumps(d)
    db = get_db()
    db.execute("UPDATE users SET data=?, updated_at=CURRENT_TIMESTAMP WHERE username=?", (data, user))
    db.commit(); db.close()
    return jsonify({"ok": True})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
