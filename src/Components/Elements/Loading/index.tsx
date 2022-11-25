import { Text, Center, Spinner } from '@chakra-ui/react'

type Props = {
  description?: string
}

export default function Loading({ description = 'Loading your data' }: Props) {
  return (
    <Center flexDir={'column'}>
      <Spinner color="white" size="xl" />
      <Text mt="5" fontSize="md" color="white">
        {description}
      </Text>
    </Center>
  )
}
