import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import fetchRockets from './redux/rockets/rocketThunk';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/rockets" />} replace />
      <Route path="/rockets" element={<Home />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
