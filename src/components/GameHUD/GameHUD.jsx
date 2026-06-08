// components/GameHUD/GameHUD.jsx

import "./GameHUD.css";

export default function GameHUD({
  current,
  total,
  score,
  correct
}) {
  return (
    <div className="game-hud">
      <div>
        Carta {current}/{total}
      </div>

      <div>
        ⭐ {score}
      </div>

      <div>
        ✓ {correct}
      </div>
    </div>
  );
}