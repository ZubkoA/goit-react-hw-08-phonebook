import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunk';

const handleFulfilled = (state, { payload }) => {
  console.log(payload);
  state.access_token = payload.access_token;
  state.isLoading = false;
};

// const handleFulfilledProfile = (state, { payload }) => {
//   state.profile = { ...payload };
//   state.isLoading = false;
// };

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled(), handleFulfilled)
      // .addCase(profileThunk.fulfilled(), handleFulfilledProfile)
      .addMatcher(action => action.type.endsWith('/pending', handlePending))
      .addMatcher(action => action.type.endsWith('/rejected', handleRejected));
  },
});

export const authReducer = authSlice.reducer;
