import React from "react";

import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center as="section" height="100vh">
      <Spinner thickness="10px" speed="0.75s" width="100px" height="100px" />
    </Center>
  );
};

export default React.memo(Loading);
