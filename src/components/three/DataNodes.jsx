import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import { Database, Code2, Terminal, Cloud, Server, Globe, Monitor, Cpu, LineChart, Binary } from 'lucide-react';

export const DataNodes = () => {
    const group = useRef();

    useFrame((state) => {
        group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    });

    const icons = useMemo(() => [
        { Icon: Database, color: '#3b82f6' }, // blue
        { Icon: Code2, color: '#10b981' }, // emerald
        { Icon: Terminal, color: '#8b5cf6' }, // violet
        { Icon: Cloud, color: '#0ea5e9' }, // sky
        { Icon: Server, color: '#f43f5e' }, // rose
        { Icon: Globe, color: '#f59e0b' }, // amber
        { Icon: Monitor, color: '#ec4899' }, // pink
        { Icon: Cpu, color: '#14b8a6' }, // teal
        { Icon: LineChart, color: '#fb923c' }, // orange
        { Icon: Binary, color: '#c084fc' } // purple
    ], []);

    return (
        <group ref={group}>
            {icons.map((item, i) => {
                // Distribute items in a loose spherical/cylindrical orbit
                const theta = Math.random() * Math.PI * 2;
                const radius = 5 + Math.random() * 4;
                const y = (Math.random() - 0.5) * 10;

                return (
                    <Float
                        key={i}
                        position={[
                            Math.cos(theta) * radius,
                            y,
                            Math.sin(theta) * radius,
                        ]}
                        speed={2 + Math.random() * 2} // Animation speed
                        rotationIntensity={1} // XYZ rotation intensity
                        floatIntensity={2} // Up/down float intensity
                    >
                        <Html transform center distanceFactor={12}>
                            <div className="flex items-center justify-center w-16 h-16 rounded-full glass border border-black/5 dark:border-white/10 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-125"
                                style={{ background: `radial-gradient(circle, ${item.color}30 0%, rgba(255,255,255,0.05) 100%)` }}>
                                <item.Icon size={32} color={item.color} style={{ filter: `drop-shadow(0 0 10px ${item.color})` }} strokeWidth={1.5} />
                            </div>
                        </Html>
                    </Float>
                );
            })}
        </group>
    );
};
