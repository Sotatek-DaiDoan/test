import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import useScrollToTop from 'Hooks/useScrollToTop'

interface AuxProps {
  children?: React.ReactElement & React.ReactNode
}

const LayoutCommon: React.FC<AuxProps> = ({ children }) => {
  useScrollToTop()
  return (
    <Flex
      flexDirection="column"
      minH="100vh"
      maxH="max-content"
      pos="relative"
      backgroundImage={'url(/assets/images/imgs/bg_common_layout.svg)'}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      backgroundAttachment="scroll"
      backgroundPosition="top"
      backgroundColor="black"
    >
      <Header />
      <Container
        maxW={{
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}
        mt={{ base: 32, md: 40 }}
        mb={4}
      >
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default LayoutCommon
