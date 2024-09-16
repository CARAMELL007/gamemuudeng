import React, { useState } from 'react';
import './App.css';
import hippoImg from './assets/hippo.jpg';  
import otherImg from './assets/TAE.jpg';  
import watermelonImg from './assets/watermelon.jpg';
import pumpkinImg from './assets/pumpkin.jpg';
import grassImg from './assets/grass.jpg';

function App() {
  const [level, setLevel] = useState(0); 
  const [image, setImage] = useState(hippoImg); 

  const feed = (points) => {
    const newLevel = level + points;
    setLevel(newLevel);

    if (newLevel > 100) {
      setImage(otherImg);
    }
  };

  return (
    <div className="app-container">
      <h1>Level {level}</h1>
      <div>
        <img
          src={image}
          alt="hippo"
          style={{ width: `${level * 2}px`, height: 'auto' }}
        />
      </div>
      <div className="food-container">
        <img
          src={watermelonImg}
          alt="watermelon"
          onClick={() => feed(5)}
          className="food-item"
        />
        <img
          src={pumpkinImg}
          alt="pumpkin"
          onClick={() => feed(10)}
          className="food-item"
        />
        <img
          src={grassImg}
          alt="grass"
          onClick={() => feed(20)}
          className="food-item"
        />
      </div>
    </div>
  );
}

export default App;
