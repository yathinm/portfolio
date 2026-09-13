import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Blob() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Environment preset="forest" />
      <FollowBlob />
    </Canvas>
  );
}

function FollowBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const velocityRef = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { width } = state.viewport;
    const baseX = width * 0.25;
    const targetX = baseX + state.pointer.x * 0.9;
    const targetY = state.pointer.y * 0.9;

    const stiffness = 10;
    const damping = 0.92;
    const velocity = velocityRef.current;

    velocity.x += (targetX - meshRef.current.position.x) * stiffness * delta;
    velocity.y += (targetY - meshRef.current.position.y) * stiffness * delta;
    velocity.multiplyScalar(damping);
    meshRef.current.position.x += velocity.x * delta;
    meshRef.current.position.y += velocity.y * delta;

    const rotateSpeed = 3;
    const targetRotY = (meshRef.current.position.x - baseX) * 0.4;
    const targetRotX = -meshRef.current.position.y * 0.4;
    meshRef.current.rotation.y +=
      (targetRotY - meshRef.current.rotation.y) * rotateSpeed * delta;
    meshRef.current.rotation.x +=
      (targetRotX - meshRef.current.rotation.x) * rotateSpeed * delta;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <MeshDistortMaterial
        speed={4}
        distort={0.6}
        transmission={0.2}
        roughness={0}
        thickness={0.6}
        color="#ffffff"
      />
    </mesh>
  );
}
