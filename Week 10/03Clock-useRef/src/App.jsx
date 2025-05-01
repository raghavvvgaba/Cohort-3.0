import { React, useState, useRef } from "react";
// useRef is used to create a reference to a value or a DOM element, such that when you change the value, the component does not re-render
function App() {
  
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();
  function startClock(){
    let value = setInterval(function(){
      setCurrentCount(c => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
  }
  return (
    
    <div>
      {currentCount}
      <br/>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>

  )
}

export default App
