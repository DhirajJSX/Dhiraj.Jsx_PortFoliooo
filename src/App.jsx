import { useState, useEffect } from 'react';
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
    <>
      <ParticlesBG />
      <CursorEffect />
    </>
  );
}

export default App;
