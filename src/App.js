import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import CustomNavbar from './Navbar';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include Navbar here to make it available on all pages */}
        <CustomNavbar />
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
