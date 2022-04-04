import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MyProfile from './components/pages/MyProfile';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
