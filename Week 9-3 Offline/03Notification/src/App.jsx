import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount(){
    console.log("increase count called")
    setCount(count => count + 1)
  }
  useEffect(()=>{
    console.log("above SetInterval")
    setInterval(increaseCount, 1000)
}, []);
  
  
  return <div>
    <div style={{display: "flex"}}>
    <div style={{background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5}}>
        {count}
    </div>
    </div>
    <img style={{cursor: "pointer"}} src={"https://cdn-icons-png.flaticon.com/512/472/472371.png"} width={40}></img>
  </div>
  
}


export default App
