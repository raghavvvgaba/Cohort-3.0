import React, { useEffect, useState, memo } from 'react';
import './App.css';

function App() {
  return (
      <Counter />
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c => c + 1)
    }, 3000)
  }, []);

  return (
    <div>
      <CurrentCount count={count}/>
      <Increase />
      <Decrease />
    </div>
  );
}

// const MemoizedCurrentCount = memo(CurrentCount);
// or you can simply convert an existing function into memo by passing the whole function in memo

const CurrentCount = memo(function ({count}) {
  return <div>{count}</div>;
})

const Increase = memo(function () {

  function increase() {
    
  }

  return <button onClick={increase}>Increase</button>;
})

const Decrease = memo(function () {

  function decrease() {
    
  }

  return <button onClick={decrease}>Decrease</button>;
})

export default App;

//you can see in the browser that the div keeps on re-rendering even though the value of count isn't passed down to the increase and decrease functions. (this is without memo)

//React says that anytime a component re-renders, all its children also re-render   -----MAIN LINE-------

// React is not smart enough to know that you're not sending the count variable down, so it shouldn't re-render the increase and decrease components

// you have to explicitly tell it, that a component should re-render only when a state variable inside it, changes, or when a prop which is passed inside it, changes.

// It should not re-render if nothing changes

// In this case, only the parent component (i.e Counter) should re-render because it has the state variable and not it's children

// To do this, the children function should be wrapped inside a memo.

// When you wrap a function inside a memo, it only re-renders when props/state inside it changes ------MAIN LINE-------
