import React from 'react';
import './App.css';
import Navabar from './Navabar';
import Service from './Service';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div className="app">
      <Navabar />
      <Service />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
