import React from 'react'
import { HStack,IconButton, Spacer } from '@chakra-ui/react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Header = () => {
  return (
    <HStack spacing={6} m={4}>
    <Spacer/>
    <IconButton
      colorScheme='gray'
      aria-label='Linkedin Link'
      isRound='true'
      icon={<BsLinkedin />}
      as='a'
      href='https://www.linkedin.com/in/fahim-iqbal-464821215/'
    />
    <IconButton
      colorScheme='gray'
      aria-label='Github Link'
      mr={4}
      isRound='true'
      icon={<BsGithub />}
      as='a'
      href='https://github.com/pr0secutor'
    />
    </HStack>
  )
}

export default Header