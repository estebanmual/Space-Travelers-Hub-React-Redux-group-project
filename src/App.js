import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import React from 'react';
import Header from './components/header/Header';

const MyProfile = React.lazy(() => import('./components/pages/MyProfile'));
const Missions = React.lazy(() => import('./components/pages/Missions'));
const Rockets = React.lazy(() => import('./components/pages/Rockets'));

function App() {
  return (
    <>
      <React.Suspense fallback={<Spinner animation="border" />}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Missions" element={<Missions />} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
