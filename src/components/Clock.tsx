/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

interface IClockProps {
    title: string,
}

const Clock = (props: IClockProps) => {
    const [date, setDate] = useState<any>(new Date())
    
    const tick = () => {
        setDate(new Date());
    }

    React.useEffect(() => {
        var timerID = setInterval( () => tick(), 1000)
        const cleanup = () => {
            clearInterval(timerID);
        return cleanup;
        }
    })
    return (
        <div>
            <h1>Hello!!!</h1>
            <h2>{props.title}{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;