import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'


const Box =() =>{
    return(
        <mesh scale={2}>
            <boxGeometry  args={[1,1,1]}/>
            <meshBasicMaterial color={"orange"} metalness={0.4} roughness={0.4}/>
        </mesh>
    )
}

const Experiance = () => {
  return (
  <Canvas style={{height:"100vh", background:"lightblue"}} camera={{position:[0,10,8], fov:30}}>
<OrbitControls/>
<ambientLight/>
<Box/>

  </Canvas>
  )
}

export default Experiance