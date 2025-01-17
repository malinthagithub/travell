import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import CustomNavbar from './Navbar';
import Header from './Header';

function Layout() {
  const location = useLocation();

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {isHomePage && (
        <>
          <CustomNavbar />
          <Header />
        </>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
