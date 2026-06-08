import "./StartScreen.css";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="hero">
        <div className="hero-image">
          <div className="image-frame">
            <img src="/CHIGUIRO.jpeg" alt="Chigüiro" />
          </div>
        </div>

        <div className="hero-content">
          <h1>Trivia del Chigüiro</h1>

          <p className="subtitle">
            ¿CUÁNTO SABES DEL ROEDOR MÁS GRANDE DEL MUNDO?
          </p>

          <div className="stats">
            <div className="stat-card">30 cartas</div>
            <div className="stat-card">3 categorías</div>
            <div className="stat-card stat-wide">⭐ Puntaje por dificultad</div>
          </div>

          <button onClick={onStart}>Empezar Juego</button>
        </div>
      </div>
    </div>
  );
}
