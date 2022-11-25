import { Container, VStack } from "@chakra-ui/react";
import "./style.scss";

type Props = {};

const CustomHeader = (props: Props) => {
  return (
    <VStack pt="8" mb="10">
      <Container
        maxW={{
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
        color="white"
      >
        <div className="main">
          <div className="header-container">
            <p>Content Header</p>
          </div>
        </div>
      </Container>
    </VStack>
  );
};

export default CustomHeader;
