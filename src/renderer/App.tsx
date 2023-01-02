import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import Credits from './Credits';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}
