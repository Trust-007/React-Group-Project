import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Missionpage from './pages/Mission';

function App() {
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
