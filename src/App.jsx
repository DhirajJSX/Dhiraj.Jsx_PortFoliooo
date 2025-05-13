import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Loader from './Components/Loader/Loader';
import CursorEffect from './Components/CursorEffect/CursorEffect';
import ParticlesBG from './Components/Particles/Particles';
import HireMe from './Pages/HireMe'; // Import HireMe component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ParticlesBG />
      <Routes>
        <Route path="/" element={<CursorEffect />} /> 
        <Route path="/hireme" element={<HireMe />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
