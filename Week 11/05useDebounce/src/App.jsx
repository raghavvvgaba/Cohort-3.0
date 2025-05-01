import { useEffect, useRef, useState } from 'react';

function useDebounce(backendRequest){
  const currentClock = useRef();
  const fn = ()=>{
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(backendRequest, 300);
  }
  return fn;
}

function App() {

  function sendDataToBackend(){
    fetch("api.amazon.com/search");
    console.log("request sent to backend");
  }

  const debouncedFn = useDebounce(sendDataToBackend);
  
  return (
    <>
      <input type='text' onChange={debouncedFn}>
      
      </input>
    </>
  )
}

export default App;
