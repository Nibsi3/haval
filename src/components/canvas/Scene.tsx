"use client";

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  PresentationControls,
  Stage,
  RoundedBox,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';

function HavalTank300({ color = "#1a1a1a" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: color,
    metalness: 0.9,
    roughness: 0.15,
    envMapIntensity: 1.5,
  });

  const glassMaterial = new THREE.MeshStandardMaterial({
    color: "#1a3a5c",
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.7,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 1,
    roughness: 0.05,
  });

  const lightMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveIntensity: 0.5,
  });

  const wheelMaterial = new THREE.MeshStandardMaterial({
    color: "#0a0a0a",
    metalness: 0.6,
    roughness: 0.4,
  });

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Main Body - Boxy SUV Shape like Tank 300 */}
      <mesh position={[0, 0.7, 0]} material={bodyMaterial}>
        <boxGeometry args={[4.2, 1.4, 1.9]} />
      </mesh>
      
      {/* Upper Cabin - Squared off like Tank 300 */}
      <mesh position={[0.1, 1.6, 0]} material={bodyMaterial}>
        <boxGeometry args={[2.6, 0.9, 1.85]} />
      </mesh>
      
      {/* Front Hood - Flat and aggressive */}
      <mesh position={[-1.5, 0.9, 0]} material={bodyMaterial}>
        <boxGeometry args={[1.2, 0.8, 1.85]} />
      </mesh>

      {/* Rear Section - Squared off */}
      <mesh position={[1.6, 1.1, 0]} material={bodyMaterial}>
        <boxGeometry args={[1, 1.2, 1.85]} />
      </mesh>

      {/* Windshield */}
      <mesh position={[-0.85, 1.55, 0]} rotation={[0, 0, 0.25]} material={glassMaterial}>
        <boxGeometry args={[0.8, 0.7, 1.7]} />
      </mesh>

      {/* Rear Window */}
      <mesh position={[1.15, 1.55, 0]} rotation={[0, 0, -0.15]} material={glassMaterial}>
        <boxGeometry args={[0.5, 0.65, 1.7]} />
      </mesh>

      {/* Side Windows */}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[0.1, 1.6, side * 0.93]} material={glassMaterial}>
          <boxGeometry args={[2.4, 0.6, 0.05]} />
        </mesh>
      ))}

      {/* Front Grille - Chrome accent */}
      <mesh position={[-2.12, 0.7, 0]} material={chromeMaterial}>
        <boxGeometry args={[0.05, 0.6, 1.4]} />
      </mesh>

      {/* HAVAL Badge */}
      <mesh position={[-2.13, 0.7, 0]} material={chromeMaterial}>
        <boxGeometry args={[0.02, 0.15, 0.5]} />
      </mesh>

      {/* Headlights */}
      {[-0.6, 0.6].map((side) => (
        <mesh key={side} position={[-2.12, 0.85, side]} material={lightMaterial}>
          <boxGeometry args={[0.05, 0.15, 0.35]} />
        </mesh>
      ))}

      {/* Tail Lights */}
      {[-0.7, 0.7].map((side) => (
        <mesh key={side} position={[2.12, 1.0, side]}>
          <boxGeometry args={[0.05, 0.25, 0.3]} />
          <meshStandardMaterial color="#ff2020" emissive="#ff0000" emissiveIntensity={0.8} />
        </mesh>
      ))}

      {/* Roof Rails */}
      {[-0.85, 0.85].map((side) => (
        <mesh key={side} position={[0.1, 2.1, side]} material={chromeMaterial}>
          <boxGeometry args={[2.2, 0.08, 0.08]} />
        </mesh>
      ))}

      {/* Door Handles */}
      {[-0.5, 0.8].map((x) => 
        [-0.97, 0.97].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 1.2, z]} material={chromeMaterial}>
            <boxGeometry args={[0.2, 0.05, 0.02]} />
          </mesh>
        ))
      )}

      {/* Wheels - Large off-road style */}
      {[
        [-1.35, 0.45, 1.05],
        [1.35, 0.45, 1.05],
        [-1.35, 0.45, -1.05],
        [1.35, 0.45, -1.05]
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={wheelMaterial}>
            <torusGeometry args={[0.38, 0.18, 16, 32]} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.28, 0.28, 0.15, 6]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Rim Center */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, pos[2] > 0 ? 0.08 : -0.08, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
            <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Wheel Arches */}
      {[
        [-1.35, 0.5, 1.0],
        [1.35, 0.5, 1.0],
        [-1.35, 0.5, -1.0],
        [1.35, 0.5, -1.0]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.9, 0.15, 0.15]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
      ))}

      {/* Front Bumper */}
      <mesh position={[-2.0, 0.25, 0]}>
        <boxGeometry args={[0.3, 0.5, 1.9]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>

      {/* Rear Bumper */}
      <mesh position={[2.0, 0.25, 0]}>
        <boxGeometry args={[0.3, 0.5, 1.9]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>

      {/* Side Steps */}
      {[-1.0, 1.0].map((side) => (
        <mesh key={side} position={[0, 0.15, side]}>
          <boxGeometry args={[2.5, 0.1, 0.25]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      <ContactShadows 
        position={[0, -0.1, 0]} 
        opacity={0.6} 
        scale={12} 
        blur={2.5} 
        far={4} 
      />
    </group>
  );
}

export default function Scene({ carColor = "#1a1a1a" }: { carColor?: string }) {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [5, 3, 8], fov: 40 }}>
        <color attach="background" args={['#030303']} />
        <fog attach="fog" args={['#030303', 8, 25]} />
        
        <Suspense fallback={null}>
          <PresentationControls
            global
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 1.2, Math.PI / 1.2]}
          >
            <HavalTank300 color={carColor} />
          </PresentationControls>
          
          {/* Reflective Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={25}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#080808"
              metalness={0.8}
            />
          </mesh>

          {/* Ambient Particles */}
          <Sparkles 
            count={100} 
            scale={15} 
            size={1.5} 
            speed={0.3} 
            opacity={0.3}
            color="#3b82f6"
          />
          
          <Environment preset="night" />
          
          {/* Additional lighting for dramatic effect */}
          <spotLight
            position={[10, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
            color="#ffffff"
          />
          <spotLight
            position={[-10, 5, -5]}
            angle={0.5}
            penumbra={1}
            intensity={0.5}
            color="#3b82f6"
          />
          <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}

import { MeshReflectorMaterial } from '@react-three/drei';
