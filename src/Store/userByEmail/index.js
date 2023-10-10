import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialState } from './initialState'


export const getUserInfo = createAsyncThunk('user/getUserInfo', async (email) => {
    if(email){
        try {
            const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/user/getByEmail', 
            {
                email
            },
            {
                headers: {'Content-Type': 'application/json'}
            }
            )
            localStorage.setItem('userinfo', JSON.stringify(response.data[0]))
            console.log(response.data[0].userName)
            return response.data[0].userName
        }catch (error) {
            throw error
    }}
});

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.InfoLoading = true
    },
    [getUserInfo.fulfilled]: (state, action) => {
        state.InfoLoading = false
        state.userName = action.payload
    },
    [getUserInfo.rejected]: (state) => {
      state.InfoLoading = false
    }
  }
})


export default userInfoSlice.reducer