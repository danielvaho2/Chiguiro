import "./Options.css";

export default function Options({
  options,
  onSelect,
  disabled,
  selectedOption,
  correctAnswer,
}) {
  const letters = ["A", "B", "C"];

  return (
    <div className="options">
      {options.map((opt, i) => {
        const isSelected = selectedOption === opt;
        const isCorrect = opt === correctAnswer;

        let className = "option-btn";

        if (selectedOption) {
          if (isSelected && isCorrect) className += " correct";
          if (isSelected && !isCorrect) className += " wrong";
          if (!isSelected && isCorrect) className += " correct-answer";
        }

        return (
          <button
            key={i}
            className={className}
            onClick={() => onSelect(opt)}
            disabled={disabled}
          >
            <span className="option-letter">
              {letters[i]}
            </span>

            <span className="option-text">
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
}