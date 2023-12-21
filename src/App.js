import React, { useState } from "react";
import Clock from "./Clock";

function App() {

  const [showClock, setShowClock] = useState(true);

  const toggleClock = (e) => {
    showClock === true ? setShowClock(false) : setShowClock(false);
  }

  return (
    <div className="App">
      <Clock />
      <button className="clock-toggle" onClick={toggleClock}>Show clock</button>
    </div>
  );
}

export default App;
