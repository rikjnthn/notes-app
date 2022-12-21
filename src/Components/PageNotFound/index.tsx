import React from "react";

import { Container, Heading, Flex, Text } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Flex alignItems="center" height="100vh" marginX="auto">
      <Container paddingY="10" paddingInline="0">
        <Container>
          <Heading textAlign="center">Page Not Found</Heading>
          <Text textAlign="center" marginTop="10">
            Can not find page that you looking for.
          </Text>
        </Container>
        <Container
          as="span"
          fontSize="16rem"
          fontWeight="bold"
          letterSpacing="wider"
          color="blackAlpha.400"
        >
          404
        </Container>
      </Container>
    </Flex>
  );
};

export default PageNotFound;
