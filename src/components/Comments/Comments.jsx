// components/Comments/Comments.jsx

import { useState } from "react";
import "./Comments.css";

export default function Comments({ onRestart }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const submit = () => {
    if (!text.trim()) return;
    setComments([{ id: Date.now(), name, text }, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div className="comments-wrapper">
      <div className="comments-card">
        <div className="comments-header">
          <span className="comments-icon">💬</span>
          <h2>Deja tu comentario</h2>
        </div>
        <p className="comments-subtitle">
          ¿Qué te pareció el juego? ¿Aprendiste algo nuevo sobre el chigüiro?
          ¿Tienes alguna duda? ¡Cuéntanos!
        </p>

        <input
          className="comments-input"
          type="text"
          placeholder="Tu nombre (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="comments-textarea"
          placeholder="Escribe aquí tu opinión, pregunta o curiosidad..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="comments-actions">
          <button className="btn-send" onClick={submit}>
            Enviar comentario 🐾
          </button>
        </div>

        {comments.length > 0 && (
          <div className="comments-list">
            {comments.map((c) => (
              <div key={c.id} className="comment-item">
                {c.name && <span className="comment-name">{c.name}</span>}
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="btn-restart" onClick={onRestart}>
        🔄 Jugar de nuevo
      </button>
    </div>
  );
}