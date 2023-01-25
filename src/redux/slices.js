import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./operrations";

function userInitialState() {
    const data = window.sessionStorage.getItem('userData');
    if (!data) {
        return {
            data: {},
            isLoading: false,
            error: null
        }
    }
    return {
        data: JSON.parse(data),
        isLoading: false,
        error: null
    }
}

export const userSlice = createSlice({
    name: "users",
    initialState: userInitialState(),
    extraReducers: {
        [signUpUser.pending](state, action){
            state.isLoading = true;
            state.error = null;
        },
        [signUpUser.fulfilled](state, action){
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        },
        [signUpUser.rejected](state, action){
            state.isLoading = false;
            state.data = {};
            state.error = action.payload;
        }
    }
})