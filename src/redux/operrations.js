import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"


export const signUpUser = createAsyncThunk("user/signup", async(data, thunkAPI) => {
    try{
        const response = await axios.post("/users/signup", data);
        
    }
    catch(err){

    }
})