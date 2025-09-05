import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Blob() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />      
      <Environment preset="dawn" />
      <FollowBlob />
    </Canvas>
  )
}

function FollowBlob() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const targetX = state.pointer.x * 1.2
    const targetY = state.pointer.y * 1.0
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 4 * delta
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 4 * delta
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 2 * delta
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 2 * delta
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <MeshDistortMaterial
        speed={4}
        distort={0.6}
        transmission={1}
        roughness={0.05}
        thickness={0.6}
        color="#ffffff"
      />
    </mesh>
  )
}