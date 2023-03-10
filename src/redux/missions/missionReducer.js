import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_MISSION = 'redux/missions/mession';
const apiLink = 'https://api.spacexdata.com/v3/missions';

const renderMission = (res) => res.map((arr) => {
  const { mission_id: missionId, mission_name: missionName, description } = arr;
  return {
    missionId, missionName, description,
  };
});

export const fetchMission = createAsyncThunk(GET_MISSION, async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  return renderMission(data);
});

const missionSlice = createSlice({
  name: 'mission',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      let items = state;
      items = action.payload;
      return items;
    });
  },
  reducers: {
    joinMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.missionId !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    },
    leavingMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.missionId !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    },
  },
});

export default missionSlice.reducer;
export const { joinMission, leavingMission } = missionSlice.actions;
