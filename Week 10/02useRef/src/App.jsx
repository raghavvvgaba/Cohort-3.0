import { useRef } from "react";
// useRef is used to create a reference to a value or a DOM element, such that when you change the value, the component does not re-render
function App() {
  const inputRef = useRef();
  function focusOnInput(){
    // document.getElementById("name").focus();
    inputRef.current.focus();
  }
  return (
    <>
    Sign up
      <input ref={inputRef} id="name" type={"text"}></input> {/*you don't need id now */}
      <input type={"text"}></input>
      <button onClick={focusOnInput}>Submit</button>
    </>
  )
}

export default App
