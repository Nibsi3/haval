"use client";

import { useRef, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PresentationControls, 
  Stage, 
  Environment, 
  ContactShadows,
  MeshReflectorMaterial
} from '@react-three/drei';
import * as THREE from 'three';

function ConfigurableCar({ color, metalness, roughness }: { color: string; metalness: number; roughness: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 1.2, 2]} />
        <meshStandardMaterial 
          color={color} 
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[2, 0.8, 1.8]} />
        <meshStandardMaterial 
          color={color} 
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      
      {/* Wheels */}
      {[[-1.5, 0, 1], [1.5, 0, 1], [-1.5, 0, -1], [1.5, 0, -1]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      <ContactShadows 
        position={[0, -0.4, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
      />
    </group>
  );
}

export default function Configurator() {
  const [carColor, setCarColor] = useState('#3b82f6');
  const [metalness, setMetalness] = useState(0.8);
  const [roughness, setRoughness] = useState(0.2);

  const colors = [
    { name: 'Thorp Blue', value: '#3b82f6' },
    { name: 'Phantom Black', value: '#0a0a0a' },
    { name: 'Alpine White', value: '#f8fafc' },
    { name: 'Solar Red', value: '#ef4444' },
    { name: 'Titanium Silver', value: '#94a3b8' },
  ];

  return (
    <div className="pt-20 bg-black min-h-screen flex flex-col md:flex-row">
      {/* 3D Viewport */}
      <div className="flex-grow h-[50vh] md:h-screen bg-[#050505]">
        <Canvas shadows camera={{ position: [0, 2, 10], fov: 35 }}>
          <color attach="background" args={['#050505']} />
          <Suspense fallback={null}>
            <PresentationControls
              global
              snap
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            >
              <Stage environment="city" intensity={0.5}>
                <ConfigurableCar color={carColor} metalness={metalness} roughness={roughness} />
              </Stage>
            </PresentationControls>
            
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
              <planeGeometry args={[100, 100]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
              />
            </mesh>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Control Panel */}
      <div className="w-full md:w-96 bg-zinc-950 border-l border-white/10 p-8 overflow-y-auto">
        <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Configurator</h1>
        <p className="text-gray-500 text-sm mb-8 font-medium">Customize your dream vehicle in real-time.</p>

        <div className="space-y-10">
          {/* Color Selection */}
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Exterior Color</label>
            <div className="grid grid-cols-5 gap-3">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCarColor(c.value)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    carColor === c.value ? 'border-blue-500 scale-110' : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Material Controls */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Metalness</label>
                <span className="text-blue-500 text-xs font-bold">{Math.round(metalness * 100)}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={metalness}
                onChange={(e) => setMetalness(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Roughness</label>
                <span className="text-blue-500 text-xs font-bold">{Math.round(roughness * 100)}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={roughness}
                onChange={(e) => setRoughness(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
              Request This Build
            </button>
            <p className="text-[10px] text-gray-600 mt-4 text-center leading-relaxed font-medium">
              *Prices may vary based on customization choices and local availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
