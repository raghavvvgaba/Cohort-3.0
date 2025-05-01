import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {

  const [currentTab, setCurrentTab] = useState("feed");
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function(){
    //send a backend request to get data for this tab
    console.log("send request to backend for tab" + currentTab); 
    fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab)
    .then(async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false)
    })
  }, [currentTab])
  return <div>
    <button onClick={function(){
      setCurrentTab(1)
    }}style={{color: currentTab == 1? "red": "black"}}>ToDo 1</button>
    <button onClick={function(){
      setCurrentTab(2)
    }}style={{color: currentTab == 2? "red": "black"}}>ToDo 2</button>
    <button onClick={function(){
      setCurrentTab(3)
    }}style={{color: currentTab == 3? "red": "black"}}>ToDo 3</button>
    <button onClick={function(){
      setCurrentTab(4)
    }}style={{color: currentTab == 4? "red": "black"}}>ToDo4</button>
    <br/>
    {loading? "Loading...": tabData.title}
  </div>
  
}


export default App
