import { createSlice } from "@reduxjs/toolkit";

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

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export {
    authReducer,
    authActions
}