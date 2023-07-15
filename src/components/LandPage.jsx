import { React, Suspense } from "react";
import {
  Box,
  Flex,
  Text,
  Center
} from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Toroid from "./3dObjects/Toroid";
import { motion } from "framer-motion";

const LandPage = () => {
  // const [isSmallerScreen] = useMediaQuery("(max-width:480px)");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <Center mt={6} mb={[10, 40, null, null]}>
      <Flex
        borderRadius={10}
        w={["98%", "95%", null]}
        h={"max(87vh,500px)"}
        bgGradient="linear(to-br, #ff7e3d, #EA5455)"
        boxShadow="md"
        direction="column"
        justify="center"
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Text
          position="absolute"
          zIndex={1}
          left={0}
          right={0}
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          color="white"
          as={motion.div}
          variants={item}
        >
          Hi this is <strong>FAHIM IQBAL</strong> <br />a Front-End Web
          Developer
        </Text>
        <Box as={motion.div} variants={item} h="inherit">
          <Suspense fallback={null}>
            <Canvas gl={{ localClippingEnabled: true }} camera={{ fov: 36, position: [0, 2, 1.5], near: 0.25, far: 20 }} antialias="true">
              <Toroid/>
              <ambientLight color={0xffffff} intensity={0.3}/>
              <spotLight
                angle={Math.PI / 5}
                penumbra={0.2}
                position={[2, 3, 3]}
              />
              <directionalLight
                color={0xffffff}
                position={[0, 3, 0]}
                intensity={0.5}
              />
            </Canvas>
          </Suspense>
        </Box>
      </Flex>
    </Center>
  );
};

export default LandPage;
