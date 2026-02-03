import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import AttractionList from './pages/AttractionList';
import ConvenienceStoreList from './pages/ConvenienceStoreList';
import Transportation from './pages/Transportation';
import AttractionDetails from './pages/AttractionDetails';
import RestaurantDetails from './pages/RestaurantDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/attractions" element={<AttractionList />} />
          <Route path="/attractions/:id" element={<AttractionDetails />} />
          <Route path="/convenience" element={<ConvenienceStoreList />} />
          <Route path="/transportation" element={<Transportation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
