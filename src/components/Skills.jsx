import React from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

import threejs from "../images/threejs.svg";
import bash from "../images/bash-1.svg";
import js from "../images/logo-javascript.svg";
import mongodb from "../images/mongodb-icon.svg";
import opencv from "../images/opencv.svg";
import python from "../images/python.svg";

const Skills = () => {
  const [isSmallerScreen] = useMediaQuery("(max-width:767px)");

  const { scrollYProgress } = useScroll();
  const xDesk = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const xMob = useTransform(scrollYProgress,[0,1], ["0%","50%"])

  return (
    <Center
      as={motion.div}
      h={"max(75vh,400px)"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ once: true }}
      mt={{ base: 5, sm: 40 }}
      mb={{ base: 5, sm: 40 }}
    >
      <Flex
        pos={"relative"}
        w={{ base: "99%", sm: "95%" }}
        direction="column"
        justify="center"
      >
        <Heading
          position="absolute"
          left={"-15vw"}
          as={motion.div}
          style={
            isSmallerScreen
              ? { translateX: xMob, transition: "all ease-out 0.5s" }
              : { translateX: xDesk, transition: "all ease-out 0.5s" }
          }
          mt={20}
          mb={20}
          fontSize={["100px", "160px", "200px", "300px", "350px"]}
          opacity="0.2"
        >
          SKILLS
        </Heading>
        <SimpleGrid columns={3} spacing={10} p={5}>
          <ImageBox src={bash} />
          <ImageBox src={threejs} />
          <ImageBox src={js} />
          <ImageBox src={mongodb} />
          <ImageBox src={opencv} />
          <ImageBox src={python} />
        </SimpleGrid>
      </Flex>
    </Center>
  );
};

function ImageBox({ src }) {
  const [isSmallerScreen] = useMediaQuery("(max-width:850px)");
  const width_px = "180px";
  return (
    <Flex justifyContent="center" m={1}>
      <Image boxSize={isSmallerScreen ? "none" : width_px} src={src} />
    </Flex>
  );
}

export default Skills;
