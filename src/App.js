import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [beliefSlider, setBeliefSlider] = useState(Math.random());
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(data => {
      console.log(data)
    });
  });

  function sliderInput(e) {
    e.preventDefault();
    setBeliefSlider(e.target.value);
  }

  return (
    <div className="App">
        <div className="toptext">
          <p>"(Click or hover over ? for help)"</p>
          <p>Overall Political Leaning ?</p>
        </div>

      <div className="beliefslidercontainer">
        <input type="range" min="-5" max="5" className="beliefslider" step="0.5" value={beliefSlider} onInput={sliderInput} />
      </div>
    </div>
  );
}

export default App;
