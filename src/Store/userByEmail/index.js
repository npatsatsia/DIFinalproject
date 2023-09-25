import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getUserInfo = createAsyncThunk('user/getUserInfo', async (email) => {
    try {
        const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/user/getByEmail', 
        {
         email
         },
         {headers: {'Content-Type': 'application/json'}}
         )
         return response.data[0].userName
    }catch (error) {
         throw error
}
});

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.loading = true
    },
    [getUserInfo.fulfilled]: (state, action) => {
        state.loading = false
        state.userName = action.payload
    },
    [getUserInfo.rejected]: (state) => {
      state.loading = false
    }
  }
})


export default userInfoSlice.reducer