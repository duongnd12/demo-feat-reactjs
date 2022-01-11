import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { countdown } from './counterSilce'


const Countdown = () => {
    const valuedown = useSelector(( state: RootState ) => state.counter.valueDown)
    const dispatch = useDispatch()

    React.useEffect(() => {
        var timerId = setInterval( () => countdown() , 1000)
        const cleanup = () => {
            clearInterval(timerId);
            return cleanup;
        }
    })
    return (
        <div>
            <h1>{valuedown}</h1>
            <button onClick={() => dispatch(countdown())}>Start</button>
        </div>
    )
}

export default Countdown