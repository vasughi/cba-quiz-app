import React, { useState } from 'react';

const quizData = [ /* Full question list (200+) would go here */ ];

export default function CBAQuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState(() => quizData.sort(() => 0.5 - Math.random()));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (hasAnswered) return;
    setSelectedAnswer(option);
    setHasAnswered(true);
    setShowFeedback(true);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setHasAnswered(false);
  };

  if (currentQuestion >= shuffledQuestions.length) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {shuffledQuestions.length}</p>
      </div>
    );
  }

  const q = shuffledQuestions[currentQuestion];

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{q.question}</p>
      {Object.entries(q.options).map(([key, value]) => (
        <button
          key={key}
          onClick={() => handleAnswer(key)}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: 10,
            padding: 10,
            backgroundColor: selectedAnswer === key ? '#ccc' : '#eee',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}
        >
          {key}. {value}
        </button>
      ))}
      {showFeedback && (
        <div style={{ marginTop: 20 }}>
          {selectedAnswer === q.answer ? (
            <p style={{ color: 'green' }}>Correct!</p>
          ) : (
            <p style={{ color: 'red' }}>Incorrect. The correct answer is {q.answer}: {q.options[q.answer]}</p>
          )}
          <button onClick={nextQuestion} style={{ marginTop: 10 }}>Next</button>
        </div>
      )}
    </div>
  );
}