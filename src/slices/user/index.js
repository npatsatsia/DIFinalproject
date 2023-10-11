import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userEditService from "../../Services/userAdditional.service";

export const putUserChange = createAsyncThunk(
    'user/putUserChange',
    async (newPassword) => {
        try{
            const response = await userEditService.changeUser(newPassword);
            console.log(response)
            return response
        }catch(error) {
            return error
        }
    }
)

const initialState = {
    userInfoLoading: false,
    changeSuccess: [],
    error: null
}

const userEditSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [putUserChange.pending]: (state) => {
            state.userInfoLoading = true;
        },
        [putUserChange.fulfilled]: (state, action) => {
            state.userInfoLoading = false;
            state.changeSuccess = action.payload
        },
        [putUserChange.rejected]: (state,action) => {
            state.userInfoLoading = false;
            state.error = action.error.message
        },
    }
});

export default userEditSlice.reducer