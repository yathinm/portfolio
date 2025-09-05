import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Blob() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />      
      <Environment preset="forest" />
      <FollowBlob />
    </Canvas>
  )
}

function FollowBlob() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const targetX = state.pointer.x * 2.0
    const targetY = state.pointer.y * 1.6
    const followSpeed = 8
    const rotateSpeed = 4
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * followSpeed * delta
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * followSpeed * delta
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * rotateSpeed * delta
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * rotateSpeed * delta
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