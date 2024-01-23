import React, { useState } from 'react';
import Textform from './Components/Textform';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [showAlert, setShowAlert] = useState(false);

  const toggleMode = () => {
    setShowAlert(true);

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0E505F';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

    // Hide the alert after 1 second
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <Router>
      <Navbar title="Abdul Rafay" mode={mode} toggle={toggleMode} Search="NotNow" />
      {showAlert && <Alert mode={mode} />}

      <Routes>
        <Route path="/about" element={<Home mode={mode} />} />
        <Route path="/" element={<Textform mode={mode} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
