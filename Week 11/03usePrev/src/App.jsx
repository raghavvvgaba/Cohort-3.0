import { useEffect, useState } from 'react';
import { usePrev } from './Hooks/usePrev';


function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => {
        setState((curr) => curr + 1)
      }}>Click me</button>
      <p>The previous state was {prev}</p>
    </div>
  )
}

export default App;
