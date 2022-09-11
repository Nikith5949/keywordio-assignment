import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";

import Books from "./components/books";
import Insert from "./components/Insert";
function App() {
  const [token, setToken] = useState("");

  const settoken = (t) => {
    setToken(t);
    console.log(token);
  };

  return (
    <div className="App">
      <h1>Keywordio(Assignment)</h1>

      <Login settoken={settoken} />
      <br />
      <br />
      <br />
      <h1>Rest API's functions below</h1>

      <Books token={token} />

      <br />
      <br />
      <Insert />
    </div>
  );
}
export default App;
