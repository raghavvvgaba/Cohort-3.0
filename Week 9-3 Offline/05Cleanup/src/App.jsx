import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return <div style={{ display: "flex" }}>
    <Card> 
      <div style={{ color: "green" }}>
        What do you want to post <br /> <br />
        <input type="text" />
      </div>
    </Card>
    <Card>
      Hi there
    </Card>
  </div>
// all the HTML in the card function can be passed like this as children instead of props. You can use props as well, but this makes it much easier
}

function Card({ children }) {
  return <div style={{ backgroundColor: "black", borderRadius: 10, color: "white", padding: 10, margin: 10 }}>
    {children}
  </div>
}
export default App
