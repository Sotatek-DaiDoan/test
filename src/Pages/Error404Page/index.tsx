import React from 'react'
import { Center, Heading, Text } from '@chakra-ui/react'

type Props = {}

const Page404: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Center flexDir={'column'} my="20">
      <Heading
        variant={'h1'}
        fontSize="9xl"
        textAlign={'center'}
        letterSpacing="0.26em"
        ml="0.26em"
        mb="5"
      >
        404
      </Heading>
      <Text variant={'h3'} fontSize="6xl" textAlign="center">
        Not Found
      </Text>
    </Center>
  )
}

export default Page404
