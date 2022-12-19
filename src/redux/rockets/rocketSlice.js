import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    getData(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const rocketActions = rocketSlice.actions;

export default rocketSlice.reducer;
