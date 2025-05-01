import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {

  return (
    <div>
 
       {[
        //if a key is given and you flip the todos, react will know that the todos has been flipped and it will pick one up and insert it below the previous one, optimising the performance

        // But if you don't give it a key, it will calculate the difference and then re-render it again, causing performance downside
       <Todo key={1} title={"Go to gym"} done=
       {false}/>,
 
       <Todo key={2} title={"Eat food"} done=
       {false}/>
 
       ]}
   </div>
 
 
 );
};

function Todo({title, done}){
  return <div>
    {title} - {done ? "Done!": "Not done!"}
  </div>
}

export default App
