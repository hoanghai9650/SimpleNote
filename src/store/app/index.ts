import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isBiometric: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    updateLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    updateBiometric: (state, action: PayloadAction<boolean>) => {
      state.isBiometric = action.payload;
    },
  },
});

export const {updateLogin, updateBiometric} = appSlice.actions;

export default appSlice.reducer;
