import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
// trying out for testflight
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
  const velocityRef = useRef(new THREE.Vector3(0, 0, 0))

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const { width } = state.viewport
    const baseX = width * 0.25
    const targetX = baseX + state.pointer.x * 0.9
    const targetY = state.pointer.y * 0.9

    // Spring-like follow for a trailing effect (not attached to cursor)
    const stiffness = 10 // stronger attraction towards target
    const damping = 0.92 // retain a bit more velocity
    const velocity = velocityRef.current

    // accelerate towards target
    velocity.x += (targetX - meshRef.current.position.x) * stiffness * delta
    velocity.y += (targetY - meshRef.current.position.y) * stiffness * delta
    // dampen velocity
    velocity.multiplyScalar(damping)
    // integrate position
    meshRef.current.position.x += velocity.x * delta
    meshRef.current.position.y += velocity.y * delta

    // Smooth rotation follows actual blob position (adds inertia)
    const rotateSpeed = 3
    const targetRotY = (meshRef.current.position.x - baseX) * 0.4
    const targetRotX = (-meshRef.current.position.y) * 0.4
    meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * rotateSpeed * delta
    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * rotateSpeed * delta
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <MeshDistortMaterial
        speed={4}
        distort={0.6}
        transmission={.2}
        roughness={0}
        thickness={0.6}
        color="#ffffff"
      />
    </mesh>
  )
}