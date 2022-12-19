import { rocketActions } from './rocketSlice';

const fetchRockets = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    dispatch(rocketActions.getData(data));
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchRockets;
