import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'

export default function Bubbles(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bubbles.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    group.current.rotation.x = Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0, 0.1, 0.01]} />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[-0.8, 0.54, 0.86]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={materials.Material}
        position={[0.7, 0.55, 0.92]}
        scale={[0.15, 0.15, 0.15]}
      />
    </group>
  )
}

useGLTF.preload('/bubbles.glb')
