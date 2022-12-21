import React, { useState, useEffect } from "react";

import { Flex, Link } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { Delete } from "../../../../assets";
import { FolderStateType } from "..";

const FileProps = ({
  fileName,
  folderName,
  setFolderState,
  id,
}: {
  fileName: string;
  folderName: string;
  setFolderState: React.Dispatch<React.SetStateAction<FolderStateType>>;
  id: string;
}) => {
  const [open, setOpen] = useState(false);

  const { FileID } = useParams();

  const onDelete = () => {
    if (id === FileID) location.href = "http://localhost:5173";

    setFolderState((prevState) => {
      return {
        ...prevState,
        fileList: [...prevState.fileList.filter((value) => value !== fileName)],
        fileId: [...prevState.fileId.filter((value) => value !== id)],
      };
    });

    localStorage.removeItem(id);
  };

  useEffect(() => {
    FileID === id ? setOpen(() => true) : setOpen(() => false);
  }, [FileID]);

  return (
    <Flex
      className="file"
      height="8"
      alignItems="center"
      backgroundColor={open ? "blackAlpha.200" : "transparent"}
      _hover={{ backgroundColor: "blackAlpha.200" }}
    >
      <Link
        href={`/${folderName}/${id}`}
        paddingInline="0"
        paddingLeft="16"
        width="full"
        height="full"
        alignItems="center"
        marginRight="auto"
      >
        {fileName}
      </Link>
      <img onClick={onDelete} src={Delete} />
    </Flex>
  );
};

export default React.memo(FileProps);
