import './assets/css/index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes';
import Questionary from './routes/questionary';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionary/:id" element={<Questionary />} />
      </Routes>
    </div>
  );
}

export default App;
