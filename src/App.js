import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Profile from './pages/Profile';

function App() {
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
