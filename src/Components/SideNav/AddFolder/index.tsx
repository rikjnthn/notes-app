import React, { SetStateAction } from "react";

import { Flex, Text } from "@chakra-ui/react";

import { Plus } from "../../../assets";

import { FolderType } from "..";

const AddFolder = ({
  setFolderState,
}: {
  setFolderState: React.Dispatch<SetStateAction<FolderType>>;
}) => {
  const addFolder = () => {
    setFolderState((prevState) => {
      return {
        ...prevState,
        isAddFolder: true,
      };
    });
  };

  return (
    <Flex
      onClick={addFolder}
      gap="3"
      alignItems="center"
      paddingLeft="5"
      height="10"
      _hover={{ backgroundColor: "blackAlpha.200" }}
    >
      <img src={Plus} alt="plus" />
      <Text as="span">Add Folder</Text>
    </Flex>
  );
};

export default React.memo(AddFolder);
