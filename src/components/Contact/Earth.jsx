import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import EarthDayMap from "../../images/8k_earth_daymap.jpg";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import EarthCloudsMap from "../../images/8k_earth_clouds.jpg";
import EarthNightMap from "../../images/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../images/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../images/8k_earth_specular_map.jpg";
import { useRef } from "react";

// Possible need to use 'useTexture' from Drie as a way to get around this not showing up on iPhones.
// https://github.com/pmndrs/drei#usetexture

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, EarthNightMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 12;
    cloudsRef.current.rotation.y = elapsedTime / 10;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight
        color='#f6f3ea'
        position={[2, 0, 5]}
        intensity={1.2}
      />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.008, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotationSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}