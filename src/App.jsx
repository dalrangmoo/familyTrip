import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AttractionDetails from './pages/AttractionDetails';
import TripList from './pages/TripList';
import TrainTimetable from './pages/TrainTimetable';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<AttractionDetails />} />
          <Route path="/trip-list" element={<TripList />} />
          <Route path="/timetable" element={<TrainTimetable />} />
        </Routes>
        {/* We can decide to show/hide Navigation based on route if needed,
            but for now let's keep it simple.
            The pages currently have their own navs hardcoded from the design.
            I should probably clean those up if I use a shared one.
        */}
      </div>
    </Router>
  );
}

export default App;
