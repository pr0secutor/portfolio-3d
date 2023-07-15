import {
  Card,
  Center,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Experience = () => {
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
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <Center
      minH={"fit-content)"}
      mt={{ base: 10, sm: 40 }}
      mb={{ base: 10, sm: 40 }}
      flexDir={"column"}
      gap={{base:20,sm:32}}
    >
      <Heading size={"2xl"} color={"black"}>
        Projects and Experience
      </Heading>
      <SimpleGrid
        minChildWidth="300px"
        spacing="40px"
        m={5}
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
      >
        <ProjectCard
          src={"kalpana_website.png"}
          link={"https://teamkalpana.in/"}
          name={"Team Kalpana Website"}
          color={"white"}
          item={item}
        />
        <ProjectCard
          src={"ecommerce_project.png"}
          link={"https://ecommerce-store-frontend-beryl.vercel.app/"}
          name={"Ecommerce Project"}
          color={"gray.800"}
          item={item}
        />
      </SimpleGrid>
    </Center>
  );
};

function ProjectCard({ src, link, name, color, item }) {
  return (
    <Link href={link}>
      <Card
        as={motion.div}
        borderRadius={"lg"}
        overflow={"hidden"}
        variants={item}
        whileHover={{ scale: 1.04 }}
        cursor={"pointer"}
        role="group"
      >
        <Image src={src} alt="Project Image" />
        <Text
          pos={"absolute"}
          left={10}
          bottom={10}
          color={color}
          fontSize={"4xl"}
          opacity={0}
          _groupHover={{ opacity: 1 }}
          sx={{ transitionDuration: "0.6s" }}
        >
          {name}
        </Text>
      </Card>
    </Link>
  );
}

export default Experience;
