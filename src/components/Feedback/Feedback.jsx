// src/components/Feedback/Feedback.jsx

import "./Feedback.css";

export default function Feedback({
  isCorrect,
  points = 0,
  visible,
}) {
  if (!visible) return null;

  return (
    <div
      className={`feedback ${
        isCorrect ? "success" : "error"
      }`}
    >
      <h3>
        {isCorrect
          ? `✓ ¡Correcto! +${points} puntos`
          : "✗ Rayos respuesta ¡incorrecta!..."}
      </h3>

      
    </div>
  );
}