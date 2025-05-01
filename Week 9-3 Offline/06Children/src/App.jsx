import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(()=> {
    setInterval(function(){
      setShowTimer(currentValue => !currentValue);
    }, 5000)
  }, [])

  return <div>
    {showTimer && <Timer />}
  </div>
  
}

const Timer = function() {
  const [seconds, setSeconds] = useState(0);

  //if i ever unmount the timer component, the clock keeps running.
  // this is where cleanup is required
  useEffect(()=>{
    let clock = setInterval(()=>{
      console.log("from inside the clock");
      setSeconds(prev => prev + 1);
    }, 1000);

    //this the cleanup function for stopping the clock
    return function(){
      clearInterval(clock)
    }
  }, []);

  return <div>{seconds} seconds elapsed</div>
}

export default App
