import { useState } from "react";
import "./Comments.css";

export default function Comments({ onRestart }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);

  const phoneNumber = "573506931227";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarga del form

    const newComment = {
      id: Date.now(),
      ...form,
    };

    setComments((prev) => [newComment, ...prev]);

   const message = `
¡Hola, Territorio Vivo! 

Quiero conocer más sobre el chigüiro y seguir explorando el mundo de la fauna silvestre.

Nombre: ${form.name}
Correo: ${form.email}
Contacto: ${form.contact}
Comentario: ${form.comment}
`;


    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setForm({
      name: "",
      email: "",
      contact: "",
      comment: "",
    });
  };

  return (
    <div className="comments-wrapper">
      <div className="comments-card">
        <div className="comments-header">
          <span className="comments-icon">💬</span>
          <h2>Deja tu mensaje</h2>
        </div>

        {/* FORM REAL */}
        <form onSubmit={handleSubmit} className="comments-form">
          <input
            className="comments-input"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="comments-input"
            name="email"
            type="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="comments-input"
            name="contact"
            placeholder="Contacto (WhatsApp o teléfono)"
            value={form.contact}
            onChange={handleChange}
            required
          />

          <textarea
            className="comments-textarea"
            name="comment"
            placeholder="Escribe tu comentario..."
            value={form.comment}
            onChange={handleChange}
            required
          />

          <div className="comments-actions">
            <button className="btn-send" type="submit">
              Enviar mensaje 🐾
            </button>
          </div>
        </form>

        {comments.length > 0 && (
          <div className="comments-list">
            {comments.map((c) => (
              <div key={c.id} className="comment-item">
                <strong>{c.name}</strong>
                <p>{c.comment}</p>
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
