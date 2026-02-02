import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AttractionDetails from './pages/AttractionDetails';
import TripList from './pages/TripList';
import TrainTimetable from './pages/TrainTimetable';

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
      </div>
    </Router>
  );
}

export default App;
