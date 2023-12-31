import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from '../../Services/auth.service';

const user = JSON.parse(localStorage.getItem("user"));
let error = null
let logInLoading = false
let regLoading = false
let registered = false
let message


export const register = createAsyncThunk(
  "auth/register",
  async ({ username, regEmail, regPassword }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, regPassword, regEmail);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data
    } catch (error) {
      let message 
      if (!error?.response) {
        message = 'No Server Response';
    } else if (error.response?.status === 409) {
        message = 'Username Taken';
    } else {
        message = 'Registration Failed'
    }
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ signEmail, signPassword }, thunkAPI) => {
    try {
      const data = await AuthService.login(signEmail, signPassword);
      return { user: data, email: signEmail};
    } catch (err) {
        if (!err?.response) {
            message = 'No Server Response';
        } else if (err.response?.status === 400) {
            message = 'Missing Username or Password';
        } else if (err.response?.status === 401) {
            message = 'Unauthorized';
        } else {
            message = 'Login Failed';
        }
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
    AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user, logInLoading, regLoading, registered }
  : { isLoggedIn: false, user: null, error, logInLoading, regLoading, registered }

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.regLoading = false
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.registered = action.payload
      state.regLoading = false
    },
    [register.rejected]: (state,action) => {
      state.isLoggedIn = false;
      state.error = action.error.message
      state.regLoading = false
    },
    [login.pending]: (state) => {
      state.logInLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.logInLoading = false
      state.user = action.payload.user;
      state.email = action.payload.email
    },
    [login.rejected]: (state, action) => {
      state.logInLoading = false
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.error.message
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;