import { createContext, useContext, useState } from 'react'


const BulbContext = createContext();  //defined the context here

function BulbProvider({ children }){
  const [bulbOn, setBulbOn]  = useState(true);
  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
} //providing the context

function App() {
  return (
    <>
    <BulbProvider>            
        <Light/>
    </BulbProvider>
    </>
  )
}

function Light({bulbOn, setBulbOn}){
  return <div>
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch setBulbOn={setBulbOn}/>
  </div>
}

function LightBulb(){
  const { bulbOn } = useContext(BulbContext); //using the context
  return <div>
    {bulbOn? "Bulb on": "Bulb off"}
  </div>
}

function LightSwitch(){
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggle(){
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}
export default App
