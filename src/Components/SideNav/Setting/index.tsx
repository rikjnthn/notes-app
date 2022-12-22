import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import { SettingIcon } from "../../../assets";

const Setting = () => {
  return (
    <Flex
      gap="3"
      alignItems="center"
      height="10"
      paddingLeft="5"
      _hover={{ backgroundColor: "blackAlpha.200" }}
    >
      <img src={SettingIcon} alt='setting' />
      <Text>Setting</Text>
    </Flex>
  );
};

export default React.memo(Setting);
