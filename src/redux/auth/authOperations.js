import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post(`/users/logout`);
    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});