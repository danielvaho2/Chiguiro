// components/GameCard/GameCard.jsx

import "./GameCard.css";

export default function GameCard({ card, flipped }) {
  return (
    <div className="card-container">
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        {/* FRENTE */}
        <div className="card-face card-front">
          <div className="card-image-wrap">
            <img
              src={card.frontImage}
              alt={card.catLabel}
              className="card-bg"
            />
          </div>
         
        </div>

        {/* REVERSO */}
        <div className="card-face card-back">
          <div className="card-image-wrap">
            <img
              src={card.backImage}
              alt="respuesta"
              className="card-bg"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}