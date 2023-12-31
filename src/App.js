import React, { useState } from "react";
import Clock from "./Clock";

function App() {

  const [showClock, setShowClock] = useState(true);

  const toggleClock = (e) => {
    setShowClock(!showClock)
  };

  return (
    <div className="App">
      {showClock && <Clock />}
      <button className="clock-toggle" onClick={toggleClock}>{showClock ? "Show clock" : "Hide clock"}</button>
    </div>
  );
}

export default App;
