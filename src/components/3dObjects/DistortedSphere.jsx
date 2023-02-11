import {React, useMemo,useRef} from "react";
import { useIntersect } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function DistortedSphere(props) {
  const visible = useRef()
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const [xRandomFactor, yRandomFactor] = useMemo(() => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5], [])

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime()

    ref.current.rotation.x = elapsedTime * xRandomFactor
    ref.current.rotation.y = elapsedTime * yRandomFactor
  })
  return (
    <Sphere ref={ref} visible args={[1, 100, 200]} scale={props.scale}>
      <MeshDistortMaterial
        color="#e0e0e0"
        attach="material"
        distort="0.4"
        speed="1.5"
        roughness="1"
      />
    </Sphere>
  );
}