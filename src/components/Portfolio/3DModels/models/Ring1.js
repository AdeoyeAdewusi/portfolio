import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export default function Ring(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Ring1.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = 0.4 - (1 + Math.sin(t / 1.5)) / 20
    group.current.rotation.x = Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.002']}
        position={[-0.09, 0, -0.01]}
        rotation={[2.91, 0, 0]}
        scale={[0.65, 0.25, 0.65]}
      />
    </group>
  )
}

useGLTF.preload('/Ring1.glb')
