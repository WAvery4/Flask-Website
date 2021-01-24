import React, { useState, useEffect } from 'react';
import './App.css';
import SourceSlider from './Components/SourceSlider';

function App() {

  const [newsData, setNewsData] = useState([[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]]);
  const [overallLeaning, setOverallLeaning] = useState(0);

  // loads data from the backend
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(data => {
      setNewsData(data.data)
    });
  }, []);

  // updates overall political leaning when source sliders change
  function updateOverallLeaning(delta, id) {
    setOverallLeaning(overallLeaning + delta*newsData[id][1])
    console.log(overallLeaning)
  }

  return (
    <div className="App">
        <div className="toptext">
          <p>(Click or hover over <b>?</b> for help)</p>
          <p>
            Overall Political Leaning 
            <b className="tooltip"> ?
              <span className="tooltiptext">
                Estimated Bias:
                <br/>
                Based on the user's interaction with the source reputation, we estimate the political bias
                of the user and vice versa
              </span>
            </b>
          </p>
        </div>

        <div className="belieftitles">
          <p>Liberal</p>
          <p>Conservative</p>
        </div>
      
        <div className="beliefslidercontainer">
          <input type="range" min="-5" max="5" className="beliefslider" step="0.5" value={overallLeaning} disabled={true} />
        </div>

        <div className="tablecontainer">
          <table className="table" border={1} frame="void" rules="rows">
            <thead>
              <tr>
                <th className="tableheader">News Source 
                  <b className="tooltip"> ?
                    <span className="tooltiptext">
                      Source:
                      <br/>
                      The website that publishes the article
                    </span>
                  </b>
                </th>
                <th className="tableheader">Source Political Leaning
                  <b className="tooltip"> ?
                    <span className="tooltiptext">
                      Source Bias:
                      <br/>
                      We predicted the bias of the source (left means Liberal, middle means neutral, right means high Conservative, click to sort)
                    </span>
                  </b>
                </th>
                <th className="tableheader">Source Reputation
                  <b className="tooltip"> ?
                    <span className="tooltiptext">
                      Predicted Reputation:
                      <br/>
                      We predict the reputation of the source (left means low, middle means unknown, right means high reputation, click to sort)
                    </span>
                  </b>
                </th>
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
                <td><SourceSlider value={newsData[0][2]} onChange={updateOverallLeaning} id={0} /></td>
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
                <td><SourceSlider value={newsData[1][2]} onChange={updateOverallLeaning} id={1} /></td>
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
                <td><SourceSlider value={newsData[2][2]} onChange={updateOverallLeaning} id={2} /></td>
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
                <td><SourceSlider value={newsData[3][2]} onChange={updateOverallLeaning} id={3} /></td>
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
                <td><SourceSlider value={newsData[4][2]} onChange={updateOverallLeaning} id={4} /></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
