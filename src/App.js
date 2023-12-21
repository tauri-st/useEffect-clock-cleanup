import React, { useState } from "react";
import Clock from "./Clock";

function App() {

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <Clock />
      <button className="clock-toggle">Show clock</button>
    </div>
  );
}

export default App;
