import { useMemo, useState } from "react";
import "./App.css";
import { useGame } from "./hooks/useGame";

import StartScreen from "./components/StartScreen/StartScreen";
import GameHUD from "./components/GameHUD/GameHUD";
import GameCard from "./components/GameCard/GameCard";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Results from "./components/Results/Results";

function shuffle(arr) {
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function App() {
  const game = useGame();
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // Pantalla inicial
  if (!game.started) {
    return <StartScreen onStart={game.startGame} />;
  }

  // Pantalla final
  if (game.finished) {
    return (
      <Results
        score={game.score}
        correct={game.correctCount}
        total={game.deck.length}
        onRestart={game.startGame}
      />
    );
  }

  const card = game.deck[game.currentIdx];

  const options = useMemo(() => {
    return shuffle([card.correct, ...card.wrong]);
  }, [card]);

  const handleSelect = (option) => {
    if (answered) return;

    const correct = option === card.correct;
    setSelectedOption(option);
    setAnswered(true);
    setIsCorrect(correct);

    // gira la carta
    setTimeout(() => {
      setFlipped(true);
    }, 200);

    if (correct) {
      game.setScore((prev) => prev + card.dif);

      game.setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setAnswered(false);
    setIsCorrect(false);
    setFlipped(false);
 setSelectedOption(null); 
    game.nextCard();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <GameHUD
        current={game.currentIdx + 1}
        total={game.deck.length}
        score={game.score}
        correct={game.correctCount}
      />

      <GameCard card={card} flipped={flipped} />

      <Options
        options={options}
        onSelect={handleSelect}
        disabled={answered}
        selectedOption={selectedOption}
        correctAnswer={card.correct}
      />

      <div className="feedback-button">

      <Feedback
        visible={answered}
        isCorrect={isCorrect}
        points={card.dif}
        fact={card.dato}
        />

      {answered && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            
          }}
          >
          <button
            onClick={handleNext}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              background: "#1a3a2a",
              color: "#fff",
              fontWeight: "bold",
            }}
            >
            {game.currentIdx === game.deck.length - 1
              ? "Ver resultados 🏁"
              : "Siguiente carta →"}
          </button>
        </div>
      )}
      </div>
    </main>
  );
}

export default App;
