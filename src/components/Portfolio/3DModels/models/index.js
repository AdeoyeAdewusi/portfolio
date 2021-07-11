import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import {
  ContactShadows, 
  Environment, 
FlyControls, TrackballControls, Stars } from '@react-three/drei';
import Bubbles from './Bubbles';
import Cupcake from './Cupcake';
import Dinoblend from './Dinoblend1';
import Ring from './Ring1';


export default function Models() {
    return (
        <div>
        <Canvas shadows
         dpr={[1, 2]} 
         camera={{ position: [20, 0, 10], fov: 50 }}
         width='50vw'
        style={{height:'650px', backgroundColor:'#222'}}>
        <ambientLight intensity={0.1} />
        <spotLight intensity={3.5} angle={0.1} penumbra={3} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
        <Stars/>
            <Bubbles position={[9.0, 0, -7]}/>
            <Cupcake  position={[4.0, 0, 6]}/>
            <Dinoblend position={[-2.0, 1, -5]} />
            <Ring  position={[-6.0, 0, 4]} />
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={1.25} width={30} height={10} blur={1.5} far={3.8} />
        </Suspense>
        <FlyControls />
        
        <TrackballControls/>
      </Canvas>
        </div>
    )
}
