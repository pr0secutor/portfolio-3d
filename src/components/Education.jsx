import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <Center h={"max(87vh,550px)"} mt={{ base: 10, sm: 40 }} mb={{ base: 10, sm: 40 }}>
      <VStack
        spacing={[20, 40, null, null]}
        w={{base:"99%", sm:"95%"}}
        justifyContent="center"
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Heading
          position="absolute"
          left={0}
          right={0}
          mt={{ base: 12, sm: 20, md: 28, lg: 16 }}
          fontSize={["68px", "115px", "150px", "200px", "250px"]}
          color="#D1D2D5"
          as={motion.h1}
          variants={item}
        >
          Education
        </Heading>
        <Box mt={16} mb={16} as={motion.div} variants={item}>
          <EdHeading text="NETAJI SUBHASH UNIVERSITY OF TECHNOLOGY" />
          <EdText text="B.Tech in Information Technology | 2024" />
        </Box>
        <Box mt={16} mb={16} as={motion.div} variants={item}>
          <EdHeading text="THE FRANK ANTHONY PUBLIC SCHOOL(ISC)" />
          <EdText text="Class XII | 2019" />
        </Box>
        <Box mt={16} mb={16} as={motion.div} variants={item}>
          <EdHeading text="THE FRANK ANTHONY PUBLIC SCHOOL(ICSE)" />
          <EdText text="Class X | 2017" />
        </Box>
      </VStack>
    </Center>
  );
};

function EdHeading({ text }) {
  return (
    <Heading as="h1" size={["sm", "md", "xl", null]} noOfLines="2">
      {text}
    </Heading>
  );
}

function EdText({ text }) {
  return (
    <Text as="h1" fontSize={["md", "lg", "3xl", null]} noOfLines="1">
      {text}
    </Text>
  );
}

export default Education;
