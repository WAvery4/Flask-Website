import React, { useState, useEffect } from 'react';
import './App.css';
import SourceSlider from './Components/SourceSlider';

function App() {

  const [newsData, setNewsData] = useState([[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]]);

  // loads data from the backend
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(data => {
      setNewsData(data.data)
    });
  }, []);

  // updates overall political leaning when source sliders change
  function updateOverallLeaning() {

  }

  return (
    <div className="App">
        <div className="toptext">
          <p>(Click or hover over ? for help)</p>
          <p>Overall Political Leaning ?</p>
        </div>

        <div className="belieftitles">
          <p>Liberal</p>
          <p>Conservative</p>
        </div>
      
        <div className="beliefslidercontainer">
          <input type="range" min="-5" max="5" className="beliefslider" step="0.5" value={0} disabled={true} />
        </div>

        <div className="tablecontainer">
          <table className="table" border={1} frame="void" rules="rows">
            <thead>
              <tr>
                <th>News Source ?</th>
                <th>Source Political Leaning ?</th>
                <th>Source Reputation ?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{newsData[0][0]}</td>
                <td>
                  <div className="belieftitlestable">
                    <p>Liberal</p>
                    <p>Conservative</p>
                  </div>
                  <input type="range" min="-1" max="1" className="slider" value={newsData[0][1]} step="0.5" disabled={true} />
                </td>
                <td><SourceSlider value={newsData[0][2]} onChange={updateOverallLeaning} /></td>
              </tr>
              <tr>
                <td>{newsData[1][0]}</td>
                <td>
                  <div className="belieftitlestable">
                    <p>Liberal</p>
                    <p>Conservative</p>
                  </div>
                  <input type="range" min="-1" max="1" className="slider" value={newsData[1][1]} step="0.5" disabled={true} />
                </td>
                <td><SourceSlider value={newsData[1][2]} /></td>
              </tr>
              <tr>
                <td>{newsData[2][0]}</td>
                <td>
                  <div className="belieftitlestable">
                    <p>Liberal</p>
                    <p>Conservative</p>
                  </div>
                  <input type="range" min="-1" max="1" className="slider" value={newsData[2][1]} step="0.5" disabled={true} />
                </td>
                <td><SourceSlider value={newsData[2][2]} /></td>
              </tr>
              <tr>
                <td>{newsData[3][0]}</td>
                <td>
                  <div className="belieftitlestable">
                    <p>Liberal</p>
                    <p>Conservative</p>
                  </div>
                  <input type="range" min="-1" max="1" className="slider" value={newsData[3][1]} step="0.5" disabled={true} />
                </td>
                <td><SourceSlider value={newsData[3][2]} /></td>
              </tr>
              <tr>
                <td>{newsData[4][0]}</td>
                <td>
                  <div className="belieftitlestable">
                    <p>Liberal</p>
                    <p>Conservative</p>
                  </div>
                  <input type="range" min="-1" max="1" className="slider" value={newsData[4][1]} step="0.5" disabled={true} />
                </td>
                <td><SourceSlider value={newsData[4][2]} /></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
