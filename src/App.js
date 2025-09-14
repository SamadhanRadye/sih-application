import './App.css';
import HomeNav from './components/HomeNav';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Simulation from './components/Simulations';
import MathsSimulations from './components/MathsSimulations';
import About from './components/About';
import { Routes, Route } from "react-router-dom"; 
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <HomeNav />
      <Routes>
        <Route path="/science-simulations" element={<Simulation />} />
        <Route path="/maths-simulations" element={<MathsSimulations />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
