import { useEffect, useRef } from "react"

export const usePrev = (value) =>{
    const ref = useRef();
    console.log("re-rendr happened with the new value" + value);

    useEffect(()=>{
        console.log("updated the ref to be" + value);
        ref.current = value;
    }, [value]);

    console.log("returned" + ref.current);
    return ref.current;
}

// it returns first, effect gets called later

