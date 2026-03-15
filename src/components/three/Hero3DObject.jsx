import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';

const Hero3DObject = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.2;
            meshRef.current.rotation.x = time * 0.1;

            // Subtle pointer tracking
            meshRef.current.position.x = state.pointer.x * 0.5;
            meshRef.current.position.y = state.pointer.y * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            {/* Core Object */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 0]} />
                <meshPhysicalMaterial
                    color="#4f46e5"
                    emissive="#312e81"
                    wireframe
                    transparent
                    opacity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                />

                {/* Inner glowing core */}
                <mesh>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <MeshDistortMaterial
                        color="#a855f7"
                        emissive="#7e22ce"
                        emissiveIntensity={2}
                        distort={0.4}
                        speed={3}
                        roughness={0}
                    />
                </mesh>

                {/* Orbiting small cubes */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <group
                        key={i}
                        rotation={[
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                            0
                        ]}
                    >
                        <mesh position={[0, 2.8, 0]}>
                            <boxGeometry args={[0.3, 0.3, 0.3]} />
                            <meshStandardMaterial
                                color="#2dd4bf"
                                emissive="#0f766e"
                                emissiveIntensity={1}
                            />
                        </mesh>
                    </group>
                ))}
            </mesh>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#c084fc" />
        </Float>
    );
};

export default Hero3DObject;
