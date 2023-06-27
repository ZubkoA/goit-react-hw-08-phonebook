import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, login, getProfile } from 'api/apiAuth';

export const register = createAsyncThunk(
  'users/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProfile();

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

