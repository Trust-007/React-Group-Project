import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchRockets from './redux/rockets/rocketThunk';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Missionpage from './pages/Mission';
import { fetchMission } from './redux/missions/missionReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMission());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/rockets" />} replace />
      <Route path="/rockets" element={<Home />} />
      <Route path="/missions" element={<Missionpage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
