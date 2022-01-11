import React, { memo } from "react";

interface ICountDownProps {
    onIncrease: any
}

    const CountDown = (props: ICountDownProps) => {
    console.log('re-render');
    


    return (
        <div>
            <button onClick={props.onIncrease}>Click me!</button>
        </div>
    )
}

export default memo(CountDown)