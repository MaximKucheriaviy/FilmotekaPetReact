import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"


export const signUpUser = createAsyncThunk("user/signup", async(data, thunkAPI) => {
    try{
        const response = await axios.post("/users/signup", data);
        return response.data;
    }
    catch(err){
        return thunkAPI.rejectWithValue("User creation error");
    }
})


export const loginUser = createAsyncThunk("user/login", async(data, thunkAPI) => {
    try{
        const response = await axios.post("/users/login", data);
        return response.data;
    }
    catch(err){
        const {response} = err;
        return thunkAPI.rejectWithValue(response.data.message);
    }
})
