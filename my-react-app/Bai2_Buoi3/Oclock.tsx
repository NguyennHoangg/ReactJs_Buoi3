import React, { useEffect, useState } from "react";

export default function Oclock(){
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const intervalValid = setInterval(() =>{
            setTime(new Date());
        }, 1000)


        return () =>{
            clearInterval(intervalValid);
        }
    }, [])
    return(
        <div style={{margin: "auto"}}>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}