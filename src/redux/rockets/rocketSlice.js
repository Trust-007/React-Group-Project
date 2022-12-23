import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    getData(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
    reserveRocket(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    },
    cancelReserve(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    },
  },
});

export const rocketActions = rocketSlice.actions;

export default rocketSlice.reducer;
