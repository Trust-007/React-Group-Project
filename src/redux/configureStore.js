import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rockets/rocketSlice';
import missionReducer from './missions/missionReducer';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    mission: missionReducer,
  },
});

export default store;
