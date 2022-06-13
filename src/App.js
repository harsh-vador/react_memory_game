import "./App.css";
import { useState } from "react";
import { CARDIMAGES } from "./constants";
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const shuffleCards = () => {
    const shuffledCards = [...CARDIMAGES, ...CARDIMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div >
  );
}

export default App;
