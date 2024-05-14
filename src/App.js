import './App.css';
import { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState('Ask a Question')

  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  const getAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div className="App">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="magic-ball mx-auto mb-4">{answer}</div>
            <button onClick={getAnswer} id="shake-btn" class="btn btn-primary btn-block">Shake</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
