// Island.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { Experience } from '../components/Experience';
import { UI } from '../components/UI';
import Navbar from '../components/Navbar';

const Island = () => {
  const canvasStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div style={{ backgroundColor: 'white' }}>
        <Navbar textColor="white" /> {/* Cambia el color del texto aquí */}
      </div>
      <Canvas
        style={canvasStyle}
        shadows
        camera={{ position: [0, 0, 8], fov: 42 }}
      >
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 30]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI />
    </>
  );
};

export default Island;
