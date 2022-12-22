import React, { useEffect, useState, useRef } from "react";

import {
  Heading,
  Flex,
  Container,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const FileView = () => {
  const [view, setView] = useState(false);
  const [text, setText] = useState("");

  const saveRef = useRef<HTMLButtonElement>(null);

  const { FileID, FolderName } = useParams();
  const id = FileID ?? "";
  const folder = FolderName ?? "";

  useEffect(() => {
    const idTemp = localStorage.getItem(`${FolderName} fileIdList`) ?? "[]";
    const fileId: Array<string> = JSON.parse(idTemp);

    const folderListTemp = localStorage.getItem("notes") ?? "{}";
    const folderList: Array<string> = JSON.parse(folderListTemp).folderList;

    fileId.includes(id) && folderList.includes(folder)
      ? setView(() => true)
      : setView(() => false);
  }, [FileID, FolderName]);

  const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inp = e.currentTarget.value;

    setText(() => inp);
    localStorage.setItem(id, inp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    localStorage.setItem(id, text);
  };

  return (
    <>
      {view ? (
        <Flex
          as={"form"}
          onSubmit={handleSubmit}
          flexDirection="column"
          marginX="auto"
          marginY="20"
          width='full'
          height="calc(100vh - 10rem)"
        >
          <Button
            type="submit"
            ref={saveRef}
            width="16"
            marginLeft="auto"
            marginRight="10 "
          >
            Save
          </Button>
          <Textarea
            onBlur={handleBlur}
            width="full"
            height="full"
            border="none"
            focusBorderColor="none"
            resize="none"
            spellCheck="false"
            placeholder="What you want to write today?"
            defaultValue={localStorage.getItem(id) ?? ""}
          />
        </Flex>
      ) : (
        <Flex alignItems="center" height="100vh" marginX="auto">
          <Container paddingY="10" paddingInline="0">
            <Container>
              <Heading textAlign="center">Page Not Found</Heading>
              <Text textAlign="center" marginTop="10">
                The folder or file that you looking for have been deleted or
                doesn't exist.
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
      )}
    </>
  );
};

export default React.memo(FileView);
