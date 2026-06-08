// src/hooks/useGame.js

import { useState } from "react";
import { CARDS } from "../data/cards";

const shuffle = (arr) => {
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

export function useGame() {
  const [deck, setDeck] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const startGame = () => {
    setDeck(shuffle(CARDS));
    setCurrentIdx(0);
    setScore(0);
    setCorrectCount(0);
    setStarted(true);
    setFinished(false);
  };

  const nextCard = () => {
    if (currentIdx + 1 >= deck.length) {
      setFinished(true);
      return;
    }

    setCurrentIdx((prev) => prev + 1);
  };

  return {
    deck,
    currentIdx,
    score,
    correctCount,
    started,
    finished,
    setScore,
    setCorrectCount,
    startGame,
    nextCard,
  };
}