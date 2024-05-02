// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import Overview from './components/Overview';
import Login from './components/Login';
import Contact from './components/Contact';
import { AuthProvider } from './AuthContext'; // Importa el contexto

function App() {
  let pages
  switch (window.location.pathname) {
    case "/":
      pages = <Home />
      break
    case "/login":
      pages = <Login />
      break
    case "/overview":
      pages = <Overview />
      break
    case "/contact":
      pages = <Contact />
      break  
  }
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        
        {pages }
        
      </Router>
    </AuthProvider>
  );
}

export default App;
