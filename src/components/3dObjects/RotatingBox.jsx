import {React, useMemo,useRef} from "react";
import { useIntersect } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function DistortedSphere({scale}) {
  const visible = useRef()
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const [xRandomFactor, yRandomFactor] = useMemo(() => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5], [])

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime()

    ref.current.rotation.x = elapsedTime * xRandomFactor
    ref.current.rotation.y = elapsedTime * yRandomFactor
  })

  return (
    <mesh ref={ref} scale={scale}>
        <boxGeometry/>
        <meshLambertMaterial color='#ff0000'/>
    </mesh>
  );
}