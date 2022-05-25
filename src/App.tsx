import React from 'react';
import './assets/css/index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes';

function App() {
  const _openModal = () => {
    console.log('holi');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes/questionary/:questionaryId" />
      </Routes>
    </div>
  );
}

export default App;
