import { useState } from 'react';

//custonm hook
function useCounter(){
  const [count, setCount] = useState(1);
  function increaseCount(){
    setCount(count + 1)
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
  const {count, increaseCount} = useCounter();

  return ( 
    <div>

    <button onClick={increaseCount}>Increase {count}</button>
  </div>
  )
}

export default App;
