import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";

const Toroid = () => {
  const mesh = useRef();

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.scale.setScalar(Math.cos(delta) * 0.125 + 0.875);
  });

  return (
    <mesh ref={mesh} position={[0,0,-0.3]}>
      <torusKnotGeometry args={[0.8, 0.1, 95, 20]} />
      <meshPhongMaterial
        color={0xe0e0e0}
        shininess={100}
        side={THREE.DoubleSide}
        clipShadows
      >
        <plane attach="clippingPlanes-0" normal={[0, -1, 0]} constant={0} />
      </meshPhongMaterial>
    </mesh>
  );
};

export default Toroid;
