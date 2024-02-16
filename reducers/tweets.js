import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {token: null},
  };
  
  export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.token = action.payload.token;
        },
    },
  });
  
  export const { login } = tweetSlice.actions;
  export default tweetSlice.reducer;