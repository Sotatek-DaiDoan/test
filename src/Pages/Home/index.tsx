import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
// import { useAppSelector } from "Hooks";

type Props = {};

const Home: React.FC<React.PropsWithChildren<Props>> = (props) => {
  // const keyName = useAppSelector((state) => state.example?.keyName)

  return (
    <Center flexDir={"column"} my="20">
      <Heading
        variant={"h1"}
        fontSize="9xl"
        textAlign={"center"}
        letterSpacing="0.26em"
        ml="0.26em"
        mb="5"
      >
        Home
      </Heading>
      <Text variant={"h3"} fontSize="6xl" textAlign="center">
        Home
      </Text>
    </Center>
  );
};

export default Home;
