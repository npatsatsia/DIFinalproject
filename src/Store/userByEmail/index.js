import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (email) => {
    if(email){
        try {
            const response = await axios.post('https://digitalinstitute-amazon.azurewebsites.net/api/user/getByEmail', 
            {
                email
            },
            {
                headers: {'Content-Type': 'application/json'}
            }
            )
            localStorage.setItem('userinfo', JSON.stringify(response.data[0]))
            return response.data[0].userName
        }catch (error) {
            throw error
    }}
});

const initialState = {
  userName: [],
  infoLoading: false,
  error: null
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.infoLoading = true
    },
    [getUserInfo.fulfilled]: (state, action) => {
        state.infoLoading = false
        state.userName = action.payload
    },
    [getUserInfo.rejected]: (state) => {
      state.infoLoading = false
    }
  }
})


export default userInfoSlice.reducer