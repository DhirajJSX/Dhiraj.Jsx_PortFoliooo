// import React, { useState, useEffect } from 'react';
import './App.css';
import CursorEffect from './Components/CursorEffect/CursorEffect';
import ParticlesBG from './Components/Particles/Particles';
// import Loader from './Components/Loader/Loader'; // Adjust the import path as needed

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a loading delay
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Adjust the delay time as needed

  //   return () => clearTimeout(timer); // Clean up the timer on component unmount
  // }, []);

  // if (loading) {
  //   // return <Loader />;
  // }

  return (
    <>
      <ParticlesBG />
      <CursorEffect />
    </>
  );
}

export default App;
