import { Container, VStack } from "@chakra-ui/react";
import "./style.scss";

type Props = {};

const CustomFooter = (props: Props) => {
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
          <div className="footer-container">
            <p>FOLLOW US ON</p>
          </div>
        </div>
      </Container>
    </VStack>
  );
};

export default CustomFooter;
