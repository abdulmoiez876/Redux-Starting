import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
        showCounter: true
    },
    reducers: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.value
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
});

const counterReducer = counterSlice.reducer;
const counterActions = counterSlice.actions;

export {
    counterReducer,
    counterActions
}