import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase(){
    setCount(c => c + 1);
  }

  function decrease(){
    setCount2(c => c + 1)
  }

  return (
      <div>
        <Counter count={count} count2={count2}/>
        <button onClick={increase}>Increase Count</button>
        <button onClick={decrease}>Decrease Count</button>
      </div>
  )
}

function Counter(props){

  useEffect(function(){
    console.log("mount");

    return function(){
      console.log("unmount");
    }
  }, []); //this will be called on mounting 

  useEffect(function(){
    console.log("count has changed");

    return function(){
      console.log("cleanup inside second effect");
    }     //when the value of count changes, it cleans up for the previous state and then run the effect for the next value of count
  }, [props.count]) //this will be called when count changes

  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2} <br />
  </div>
}

export default App
