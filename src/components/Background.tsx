import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function AnimatedSpheres() {
  const sphereRefs = useRef<Mesh[]>([]);

  useFrame((state) => {
    sphereRefs.current.forEach((sphere, i) => {
      const time = state.clock.getElapsedTime();
      const offset = i * Math.PI * 0.5;
      
      // More complex movement pattern
      sphere.position.x = Math.sin(time * 0.5 + offset) * (2 + Math.sin(time * 0.2) * 0.5);
      sphere.position.y = Math.cos(time * 0.4 + offset) * (2 + Math.cos(time * 0.3) * 0.5);
      sphere.position.z = Math.sin(time * 0.3 + offset) * 0.5;
      
      // Rotation animation
      sphere.rotation.x += 0.01 + Math.sin(time * 0.1) * 0.002;
      sphere.rotation.y += 0.01 + Math.cos(time * 0.1) * 0.002;
      
      // Pulse scale animation
      const scale = 1 + Math.sin(time * 2 + offset) * 0.1;
      sphere.scale.set(scale, scale, scale);
    });
  });

  return (
    <>
      {[...Array(7)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (sphereRefs.current[i] = el as Mesh)}
          position={[i - 3, 0, 0]}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color={`hsl(${i * 40}, 100%, 75%)`}
            transparent
            opacity={0.6}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'linear-gradient(to bottom, #0a0a0a, #1a1a2e)' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <AnimatedSpheres />
      </Canvas>
    </div>
  );
}