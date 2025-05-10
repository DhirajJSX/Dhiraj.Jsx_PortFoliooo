import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Loader from './Components/Loader/Loader';
import CursorEffect from './Components/CursorEffect/CursorEffect';
import ParticlesBG from './Components/Particles/Particles';

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
    <BrowserRouter> {/* Wrap the app in BrowserRouter */}
      <ParticlesBG />
      <CursorEffect />
    </BrowserRouter>
  );
}

export default App;
