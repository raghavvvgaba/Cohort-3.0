import { Button } from "./components/Button";
import { Input } from './components/Input'
import { Otp } from "./components/Opt";

export default function App() {
  return (
    <>
      <div className="bg-blue-950 h-screen">
        <br/><br/><br/><br/>
        <Otp number={10}/>
      </div>
    </>
  )
}