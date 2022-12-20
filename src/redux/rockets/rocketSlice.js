import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    getData(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
    reserveRocket(state, action) {
      state.map((item) => {
        if (item.id !== action.payload) {
          console.log({ ...item });
          return item;
        }
        console.log({ ...item, reserved: true });
        return { ...item, reserved: true };
      });
      return state;
    },
    cancelReserve(state, action) {
      state.map((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        console.log({ ...item, reserved: false });
        return { ...item, reserved: false };
      });
      return state;
    },
  },
});

export const rocketActions = rocketSlice.actions;

export default rocketSlice.reducer;
