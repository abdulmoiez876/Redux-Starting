import {
    createSlice,
    configureStore
} from '@reduxjs/toolkit';

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
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        authenticated: false
    },
    reducers: {
        login(state) {
            state.authenticated = true
        },
        logout(state) {
            state.authenticated = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;