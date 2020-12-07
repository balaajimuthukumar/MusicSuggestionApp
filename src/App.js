import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var genresR1 = ["blues", "jazz"];
  var genresR2 = ["Rock and Roll", "Carnatic"];

  var myDict = {
    blues: [
      "Muddy Waters-Bay Please dont Go!",
      "Muddy Waters - Champagne and Reefer"
    ],
    jazz: ["Miles Davis - So What", "Louis Armstrong - What a wonderful world"],
    "Rock and Roll": ["Bon Jovi-Livin on a prayer", "Quuens-Bohemian Rhapsody"],
    Carnatic: ["Bombay Jayashri-Jagadhodharana", "M Santhanam-Endhar"]
  };
  var [music, selectfunc] = useState("My Music");
  var [musicArr, selectMusic] = useState([
    "Your Music will be displayed here!!!"
  ]);

  function musicSelector(value) {
    selectfunc(value);
    selectMusic(myDict[value]);
  }

  return (
    <div className="App">
      <h2>
        <span role="img" />
        🎵Boom Box Music
      </h2>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center"
        }}
      >
        <ul style={{ listStyle: "none" }}>
          {genresR1.map(function (item) {
            return (
              <li style={{ margin: "0.5rem" }} key={item}>
                <button
                  onClick={() => musicSelector(item)}
                  style={{
                    border: "0.5px solid black",
                    borderRadius: "0.5rem",
                    padding: "0.5rem"
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        <ul style={{ listStyle: "none" }}>
          {genresR2.map(function (item) {
            return (
              <li style={{ margin: "0.5rem" }} key={item}>
                <button
                  onClick={() => musicSelector(item)}
                  style={{
                    border: "0.5px solid black",
                    borderRadius: "0.5rem",
                    padding: "0.5rem"
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>{music}</p>
        <hr />
        <ul style={{ listStyle: "none" }}>
          {musicArr.map(function (item) {
            return (
              <li style={{ margin: "0.5rem" }} key={item}>
                <span role="img" />
                🎵{item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
