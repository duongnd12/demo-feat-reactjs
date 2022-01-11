import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { decrement, increment } from './counterSilce'

const Counter = () => {
const count = useSelector(( state: RootState ) => state.counter.value)
const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <h1 style={{margin: '10px'}}>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter