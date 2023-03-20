import React from 'react'
import { Center,Flex,Heading,Image,SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from "framer-motion"

import threejs from '../images/threejs.svg'
import bash from '../images/bash-1.svg'
import js from '../images/logo-javascript.svg'
import mongodb from '../images/mongodb-icon.svg'
import opencv from '../images/opencv.svg'
import python from '../images/python.svg'


const Skills = () => {
    const [isSmallerScreen] = useMediaQuery('(max-width:768px)')

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress,[0,1],['0%','50%'])

  return (
    <Center
    as={motion.div}
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:2}}}
    viewport={{ once: true }}

    mt={[10,40,null,null]} 
    mb={[10,40,null,null]} 
    >
        <Flex w={['99%','95%',null,null]} h='87vh' direction='column' justify='center'>
            <Heading 
            position='absolute' left={['0','0','0','-39vw','-20vw']} right={isSmallerScreen ? 0:''}
            as={motion.div}
            style={isSmallerScreen ? '':{translateX:x,transition:'all ease-out 0.5s'}}
            mt={20} mb={20} 
            fontSize={['100px','160px','200px','300px','350px']}
            opacity='0.2' 
            >SKILLS</Heading>
            <SimpleGrid columns={3} spacing={10} p={5}>
            <ImageBox src={bash}/>
            <ImageBox src={threejs}/>
            <ImageBox src={js}/>
            <ImageBox src={mongodb}/>
            <ImageBox src={opencv}/>
            <ImageBox src={python}/>
            </SimpleGrid>
        </Flex>
    </Center>
  )
}

function ImageBox({src}) {
    const [isSmallerScreen] = useMediaQuery('(max-width:850px)')
    const width_px = '180px'
    return(
    <Flex justifyContent='center' m={1}>
        <Image boxSize={isSmallerScreen ? 'none':width_px} src={src}/>
    </Flex>
    )
}

export default Skills