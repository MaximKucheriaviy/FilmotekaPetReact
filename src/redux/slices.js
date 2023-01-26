import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, loginUser, logoutUser } from "./operrations";


function userInitialState() {
    const token = window.sessionStorage.getItem('userToken');
    if (!token) {
        return {
            token: "",
            isLoading: false,
            error: null
        }
    }
    return {
        token,
        isLoading: false,
        error: null
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState(),
    reducers: {
        resetLoginError(state){
            state.error = null;
        }
    },
    extraReducers: {
        [signUpUser.pending](state, action){
            state.isLoading = true;
            state.error = null;
        },
        [signUpUser.fulfilled](state, action){
            state.isLoading = false;
            state.token = action.payload.token;
            sessionStorage.setItem("userToken", action.payload.token);
            state.error = null;
        },
        [signUpUser.rejected](state, action){
            state.isLoading = false;
            state.token = "";
            state.error = action.payload;
        },
        [loginUser.pending](state, action){
            state.isLoading = true;
            state.error = null;
        },
        [loginUser.fulfilled](state, action){
            state.isLoading = false;
            state.token = action.payload.token;
            sessionStorage.setItem("userToken", action.payload.token);
            state.error = null;
        },
        [loginUser.rejected](state, action){
            state.isLoading = false;
            state.token = "";
            state.error = action.payload;
        },
        [logoutUser.pending](state, action){
            state.isLoading = true;
            state.error = null;
        },
        [logoutUser.fulfilled](state, action){
            state.isLoading = false;
            state.token = "";
            sessionStorage.removeItem("userToken");
            state.error = null;
        },
        [logoutUser.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {resetLoginError} = userSlice.actions;