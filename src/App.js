import { useState } from 'react';
import './App.css';

export default function HomeScreen() {
  const [input, setInput] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 101));
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    const guess = parseInt(input);
    if (isNaN(guess)) {
      alert('Digite um número válido, por favor!');
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (guess === randomNumber) {
      alert(`🎉 Você acertou! Foram necessárias ${attempts + 1} tentativas. Que bom!`);
      setRandomNumber(Math.floor(Math.random() * 101));
      setAttempts(0);
      setInput('');
      setFeedback('');
    } else if (guess < randomNumber) {
      setFeedback('📈 Dica: Agora tente um número maior!');
    } else {
      setFeedback('📉 Dica: Agora tente um número menor!');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Adivinhando Com Pedro!🤔</h1>
      <p className="subtitle">Adivinhe o número entre 0 e 100</p>
      <p>Boa sorte!</p>
      <input
        type="number"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite seu palpite"
      />
      <button className="button" onClick={handleGuess}>
        Enviar
      </button>
      {feedback && <p className="feedback">{feedback}</p>}
      <p className="attempts">Tentativas: {attempts}</p>
    </div>
  );
}
