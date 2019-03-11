import React from "react";
import ReactDOM from "react-dom";
import DispalyKanban from "./DisplayKanban";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <DispalyKanban />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
