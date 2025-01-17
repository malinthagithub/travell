import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering in React 18 and beyond
import './index.css'; // Importing global CSS styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional performance monitoring utility
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap styles

// Create a root for React to mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root element
root.render(
  <React.StrictMode>
    <App /> {/* App component is rendered here */}
  </React.StrictMode>
);

// If you want to measure performance in your app, you can log the results
// or send them to an analytics endpoint. Here we use the default reportWebVitals function.
reportWebVitals();
