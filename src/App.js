import React from "react";
import "./styles.css";

import Emoji from "/components/emoji";

export default function App() {
  const fragen = ["Wie geht es dir?", "Wie geht es dir gestern?"];

  return (
    <div className="App">
      {fragen.map((frage, index) => (
        <Emoji key={index} frage={frage} />
      ))}
    </div>
  );
}
