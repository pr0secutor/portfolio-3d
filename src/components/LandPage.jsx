import {React, Suspense} from 'react'
import { Box, Flex,useMediaQuery,Text, Center } from '@chakra-ui/react'
import { Canvas } from "@react-three/fiber"
// import {Model} from './3dObjects/Magic_crystal'
// import { Model } from './3dObjects/Crystal_1'
// import {Model} from './3dObjects/Rocket'
import RotatingBox from './3dObjects/RotatingBox'
import {motion} from 'framer-motion'
import { OrbitControls } from '@react-three/drei'


const LandPage = () => {
    const [isSmallerScreen] = useMediaQuery('(max-width:480px)')

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 1
        }
      }
    }
    
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1,transition:{duration:0.6} }
    }

  return (
    <Center 
    mt={6} mb={[10,40,null,null]}
    >
      <Flex borderRadius={10} w={['98%','95%',null]} h={'max(87vh,500px)'} bgGradient='linear(to-br, #ff7e3d, #EA5455)' boxShadow='md'  direction='column' justify='center'
      as={motion.div}
      variants={container}
      initial='hidden'
      animate='show'
      >
      <Text 
      position='absolute' 
      zIndex={1} 
      left={0} 
      right={0} 
      fontSize={['2xl','3xl','4xl','5xl']} 
      color='white'

      as={motion.div}
      variants={item} 
      >Hi this is <strong>FAHIM IQBAL</strong> <br/>a Front-End Web Developer</Text>
      <Box as={motion.div} variants={item} h='inherit'>
      <Suspense fallback={null}>
      <Canvas>
          <pointLight color="red" position={[10, 0, 0]} intensity={20} />
          <pointLight color="green" position={[-10, 0, 0]} intensity={10} />
          <pointLight color="blue" position={[0, -10, 0]} intensity={10} />
          <pointLight color="violet" position={[0, 0, 10]} intensity={10} />
          <directionalLight position={[10,0,0]} intensity={1}/>
          <pointLight color='white' position={[10,10,0]} intensity={1}/>
          <RotatingBox scale={isSmallerScreen ? 1:2.5}/>
      </Canvas>
      </Suspense>
      </Box>
        
      </Flex>
    </Center>
  )
}

export default LandPage