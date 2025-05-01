import { useRef } from "react"
import { Button } from "./Button";
import { useState } from "react";

export function Otp({ number }){
    const ref = useRef(Array(number).fill(0));
    const [disabled, setDisabled] = useState(true);
    return <div className="flex justify-center">

        
        {Array(number).fill(1).map((x, index) => <SubOtpBox ref={(e)=> ref.current[index] = e} key={index}   onDone={()=>{
            if(index + 1 >= number){
                ref.current[index].focus();
                setDisabled(false);
            }
            else
            ref.current[index + 1].focus();
        }} onBack={()=>{
            if(index == 0){
                ref.current[index].focus();
            }
                ref.current[index].value = "";
                ref.current[index - 1].focus();
                setDisabled(true);
        }}/> )}
        
        <br />
        <Button disabled={disabled}>Submit</Button>                
    </div>
}

function SubOtpBox({ref, onDone, onBack }){
    const [inputBoxVal, setInputBoxVal] = useState("");
    return <div>
        <input value={inputBoxVal} ref={ref} onKeyUp={(e) => {
            if(e.key == "Backspace")
                onBack();
        }} onChange={(e) => {
            const val = e.target.value;
            if(val == '1' || val == '2'|| val == '3'|| val == '4'|| val == '5'|| val == '6'|| val == '7'|| val == '8'|| val == '9'|| val == '0' ){
                setInputBoxVal(val);
                onDone()
            } else{
                
            }
        }} type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}