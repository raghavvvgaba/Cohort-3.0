// https://petal-estimate-4e9.notion.site/13-Error-boundary-1177dfd1073580419b87e0aafaeb56b7

// display a fallback card in case of error, have to use class based components
import React from "react";
function App() {

  return (
    <div>
      <ErrorBoundary>
        <Card1/>
      </ErrorBoundary>
      <Card2/>
   </div>
 
 
 );
};

function Card1(){

  throw new Error("Error while rendering");
  return <div style={{background: "red", color: "white", borderRadius: 20, padding: 20}}>
    Hi there
  </div>
}

function Card2(){
  return <div style={{background: "red", color: "white", borderRadius: 20, padding: 20}}>
    Hello
  </div>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <div style={{background: "red", color: "white", borderRadius: 20, padding: 20}}>
          Something went wrong
        </div>
      }

      return this.props.children; 
  }
}
export default App
