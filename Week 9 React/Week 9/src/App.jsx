import { useEffect, useState } from "react";
function App() {
  //conditional rendering
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c => !c)
    }, 5000)
  }, [])



  return (
    <div>
      <h1>Hi there</h1>
      {counterVisible && <Counter></Counter>}
      hello
    </div>
  )
}


//mounting, re-rendering, unmounting
function Counter(){
  const [count, setCount] = useState(0);
  
  //hooking into lifecycle events of react
  console.log("counter");
  //useEffect guards our setInterval from re-renders as it is first called on mounting and then called when a dependency changes

  //logic for mount
  useEffect(function(){
    console.log("mount");
    let clock = setInterval(function(){
      console.log("from inside setInterval");
      setCount(count => count + 1)
    }, 1000);

    //logic for unmount, this is cleanup
    return function(){  
      console.log("on unmount");
      clearInterval(clock);
    }
  }, []); //the above logic works the way it does because this dependency is empty
   

  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App
