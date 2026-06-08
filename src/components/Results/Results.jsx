// components/Results/Results.jsx

import "./Results.css";
import Comments from "../Comments/Comments";

const getLevel = (pct) => {
  if (pct === 100)
    return { emoji: "🏆", msg: "¡Eres un experto en chigüiros!" };
  if (pct >= 80)
    return { emoji: "🌿", msg: "¡Casi lo sabes todo sobre el chigüiro!" };
  if (pct >= 50)
    return { emoji: "🌱", msg: "¡El chigüiro tiene mucho por enseñarte!" };
  return { emoji: "🪴", msg: "¡El mundo del chigüiro te espera!" };
};

const getMessage = (pct) => {
  if (pct === 100)
    return "¡Increíble! Eres todo un experto en chigüiros. ¡Comparte tu conocimiento!";
  if (pct >= 80)
    return "¡Muy bien! Conoces bastante sobre el chigüiro. ¡Sigue explorando!";
  if (pct >= 50)
    return "No te preocupes, el mundo del chigüiro es fascinante y hay mucho por aprender. ¡Intenta de nuevo o explora estos recursos!";
  return "¡El chigüiro tiene muchos secretos! Explora estos recursos para conocerlo mejor.";
};

const downloadCertificate = () => {
  const a = document.createElement("a");
  a.href = "/CERTIFICADO.png";
  a.download = "Certificado_Chiguiro.png";
  a.click();
};

export default function Results({ score, correct, total, onRestart }) {
  const pct = Math.round((correct / total) * 100);
  const { emoji, msg } = getLevel(pct);

  return (
    <div className="results-wrapper">
      <h1 className="results-heading"> Tus Resultados</h1>
      <div className="results-layout">
        {/* ── Columna izquierda: resultados ── */}
        <div className="results-left">
          {/* Card principal */}
          <div className="results-card">
            <div className="results-emoji">{emoji}</div>
            <h2 className="results-title">{msg}</h2>

            <div className="results-pct">
              {pct}
              <span>%</span>
            </div>
            <p className="results-sub">
              {correct} de {total} correctas · {score} puntos
            </p>

            <hr className="results-divider" />

            <p className="results-message">{getMessage(pct)}</p>

            {pct >= 90 && (
              <button className="btn-certificate" onClick={downloadCertificate}>
                🏅 Descargar mi certificado
              </button>
            )}

            <div className="results-links">
              <a
                href="https://es.wikipedia.org/wiki/Hydrochoerus_hydrochaeris"
                target="_blank"
                rel="noreferrer"
                className="results-link"
              >
                📖 Artículo científico
              </a>
              <a
                href="https://open.spotify.com/search/chig%C3%BCiro"
                target="_blank"
                rel="noreferrer"
                className="results-link"
              >
                🎙️ Podcast del chigüiro
              </a>
            </div>
          </div>

          {/* Card resumen */}
          <div className="results-summary-card">
            <h3 className="summary-title">📊 Resumen de tu partida</h3>
            <div className="summary-badges">
              <span className="badge badge-correct">✓ {correct} correctas</span>
              <span className="badge badge-wrong">
                ✗ {total - correct} incorrectas
              </span>
              <span className="badge badge-score">
                ⭐ {score} / {total * 20} pts
              </span>
            </div>
          </div>
        </div>

        {/* ── Columna derecha: comentarios ── */}
        <div className="results-right">
          <Comments onRestart={onRestart} />
        </div>
      </div>
    </div>
  );
}
