import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInForm } from "../types";
import { AuthApi } from "../services";
import type { RootState, AppDispatch } from './index';

export interface InitialState {
  user: logInForm;
  loading: boolean;
  error: any;
}

const initialState: InitialState = {
  user: {},
  loading: false,
  error: {},
};

export const getAuth = createAsyncThunk("auth", async (formData:logInForm) => {
  const response = await AuthApi.getLogIn(formData);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuth.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAuth.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
  },
});


export const authSelector = (state: RootState) => state.user;


export default authSlice.reducer;
