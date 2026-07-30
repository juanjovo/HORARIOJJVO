"""
Rendercode Quest — Backend Python (opcional)
Para hosting propio. En Vercel/GitHub Pages funciona sin esto (usa localStorage).
"""
from flask import Flask, send_from_directory, request, jsonify, session
import sqlite3, json, os, secrets

app = Flask(__name__, static_folder=".", static_url_path="")
app.secret_key = os.environ.get("SECRET_KEY", secrets.token_hex(32))
DB = "quest.db"

def get_db():
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    db = get_db()
    db.execute("""CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        data TEXT DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )""")
    db.commit()
    db.close()

init_db()

def get_user_id():
    if "uid" not in session:
        session["uid"] = secrets.token_hex(16)
    return session["uid"]

@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/api/load", methods=["GET"])
def load():
    uid = get_user_id()
    db = get_db()
    row = db.execute("SELECT data FROM users WHERE id=?", (uid,)).fetchone()
    db.close()
    if row:
        return jsonify(json.loads(row["data"]))
    return jsonify({"checks": {}, "totalXp": 0, "streak": 0, "lastDay": None, "completedDays": 0})

@app.route("/api/save", methods=["POST"])
def save():
    uid = get_user_id()
    data = json.dumps(request.json)
    db = get_db()
    db.execute("""INSERT INTO users (id, data) VALUES (?, ?)
                  ON CONFLICT(id) DO UPDATE SET data=?, updated_at=CURRENT_TIMESTAMP""", (uid, data, data))
    db.commit()
    db.close()
    return jsonify({"ok": True})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
