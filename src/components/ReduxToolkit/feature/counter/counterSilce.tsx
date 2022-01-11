import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number,
    valueDown: number,
}

const initialState: CounterState = {
    value: 0,
    valueDown: 60,
}

export const couterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        countdown: (state) => {
            state.valueDown -= 1
        },
        incrementByAmout: (state, action: PayloadAction<number>) => {
            state.value += action.payload
            state.valueDown -= action.payload
        },
    },
})


export const { increment, decrement, incrementByAmout, countdown } = couterSlice.actions

export default couterSlice.reducer