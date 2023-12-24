import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../CanvasLoader';

interface ComputerDesktopProps {
  isMobile: boolean;
}

const ComputerDesktop: React.FC<ComputerDesktopProps> = (props) => {
  const { isMobile } = props;
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={
          [-20, 50, 10]
        }
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={
          isMobile 
          ? [0, -2, -1.5]
          : [0, -3.25, -1.5]
        }
        rotation={
          [0, -0.2, -0.1]
        }
      />
    </mesh>
  )
};

const ComputerDesktopCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMediaQueryChange = (event: any) => setIsMobile(event.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={
        {
          position: [20, 3, 5],
          fov: 25
        }
      }
      gl={
        {
          preserveDrawingBuffer: true
        }
      }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerDesktop isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerDesktopCanvas;