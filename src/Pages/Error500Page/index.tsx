import React from 'react'
import { Center, Heading, Text } from '@chakra-ui/react'

type Props = {}

const Page500: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Center flexDir={'column'} my="20">
      <Heading
        variant={'h1'}
        fontSize="9xl"
        textAlign={'center'}
        letterSpacing="0.35em"
        ml="0.3em"
        mb="5"
      >
        500
      </Heading>
      <Text variant={'h3'} fontSize="5xl" textAlign="center">
        Internal Error
      </Text>
    </Center>
  )
}

export default Page500
