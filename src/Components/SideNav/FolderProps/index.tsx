import React, { useEffect, useState } from "react";

import {
  Flex,
  Stack,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Arrow, Delete, Plus } from "../../../assets";
import FileProps from "./FileProps";
import "./FolderProps.css";
import { FolderType } from "..";
import { useParams } from "react-router-dom";

export interface FolderStateType {
  isOpen: boolean;
  fileList: string[];
  isAddFile: boolean;
  inpFileName: string;
  inpFileInvalid: boolean;
  fileId: string[];
}

const FolderProps = ({
  folderName,
  setFolder,
}: {
  folderName: string;
  setFolder: React.Dispatch<React.SetStateAction<FolderType>>;
}) => {
  const saveFile =
    localStorage.getItem(folderName) ??
    JSON.stringify({
      isOpen: false,
      fileList: [],
      inpFileInvalid: false,
      inpFileName: "",
      isAddFile: false,
      fileId: [],
    });

  const [folderState, setFolderState] = useState<FolderStateType>(
    JSON.parse(saveFile)
  );

  const { fileList, fileId, isOpen, inpFileInvalid, inpFileName, isAddFile } =
    folderState;

  const { FolderName } = useParams();

  useEffect(() => {
    localStorage.setItem(folderName, JSON.stringify(folderState));

    localStorage.setItem(
      `${folderName} fileIdList`,
      JSON.stringify([...fileId])
    );
  }, [fileList]);

  const handleOpenFolder = () => {
    setFolderState((prevState) => {
      return {
        ...prevState,
        isOpen: !isOpen,
      };
    });
  };

  const addFile = () => {
    setFolderState((prevState) => {
      return {
        ...prevState,
        isOpen: true,
      };
    });
    setFolderState((prevState) => {
      return {
        ...prevState,
        isAddFile: true,
      };
    });
  };

  const contextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFolder = () => {
    setFolder((prevState) => {
      return {
        ...prevState,
        folderList: [
          ...prevState.folderList.filter((value) => value !== folderName),
        ],
      };
    });

    setFolderState((prevState) => {
      return {
        ...prevState,
        fileList: [],
        fileId: [],
        isOpen: false,
      };
    });
    fileId.forEach((value) => {
      localStorage.removeItem(value);
    });
    localStorage.removeItem(folderName);
    localStorage.removeItem(`${folderName} fileIdList`);

    if (FolderName === folderName) location.href = "http://localhost:5173";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const uId = new Uint32Array(1);
    crypto.getRandomValues(uId);

    if (inpFileInvalid) {
      return false;
    }

    setFolderState((prevState) => {
      return {
        ...prevState,
        fileList: [...fileList, inpFileName],
        inpFileName: "",
        isAddFile: false,
        fileId: [...fileId, String(uId)],
      };
    });
  };

  const addFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.currentTarget.value;

    if (inp) {
      fileList.includes(inp)
        ? setFolderState((prevState) => {
            return {
              ...prevState,
              inpFileName: inp,
              inpFileInvalid: true,
            };
          })
        : setFolderState((prevState) => {
            return {
              ...prevState,
              inpFileName: inp,
              inpFileInvalid: false,
            };
          });
    } else {
      setFolderState((prevState) => {
        return {
          ...prevState,
          inpFileName: "",
          inpFileInvalid: true,
        };
      });
    }
  };

  const addFileBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.currentTarget.value;
    const uId = new Uint32Array(1);
    crypto.getRandomValues(uId);

    if (inp) {
      fileList.includes(inp)
        ? setFolderState((prevState) => {
            return {
              ...prevState,
              inpFileName: inp,
              inpFileInvalid: true,
            };
          })
        : setFolderState((prevState) => {
            return {
              ...prevState,
              inpFileName: inp,
              inpFileInvalid: false,
              fileList: [...fileList, inpFileName],
              fileId: [...fileId, String(uId)],
              isAddFile: false,
            };
          });
    } else {
      setFolderState((prevState) => {
        return {
          ...prevState,
          inpFileName: "",
          isAddFile: false,
          inpFileInvalid: false,
        };
      });
    }
  };

  return (
    <Flex flexDirection="column">
      <Flex
        onContextMenu={contextMenu}
        className="folder"
        alignItems="center"
        height="8"
        lineHeight="0"
        paddingLeft="5"
        cursor="pointer"
        _hover={{ backgroundColor: "blackAlpha.200" }}
      >
        <Flex
          onClick={handleOpenFolder}
          alignItems="center"
          gap="3"
          width="full"
          height="full"
        >
          <img
            src={Arrow}
            alt="arrow"
            className={isOpen ? "rotateX-90deg" : ""}
          />
          {folderName}
        </Flex>
        <span>
          <img onClick={removeFolder} src={Delete} alt="dots" />

          <img onClick={addFile} src={Plus} alt="plus" />
        </span>
      </Flex>
      <Stack display={isOpen ? "flex" : "none"}>
        {fileList.map((fileName, index) => {
          return (
            <FileProps
              fileName={fileName}
              folderName={folderName}
              setFolderState={setFolderState}
              id={fileId[index]}
              key={index}
            />
          );
        })}

        {isAddFile ? (
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={inpFileInvalid}>
              <Input
                type="text"
                placeholder="File name"
                autoFocus
                autoComplete="off"
                onInput={addFileName}
                onBlur={addFileBlur}
                borderRadius="none"
                display="block"
                width="calc(100% - 4rem)"
                marginLeft="16"
                focusBorderColor="none"
              />
              {inpFileInvalid ? (
                <FormErrorMessage marginLeft="5">
                  {inpFileName
                    ? `A file ${inpFileName} is already exist`
                    : "Enter file name"}
                </FormErrorMessage>
              ) : null}
            </FormControl>
          </form>
        ) : null}
      </Stack>
    </Flex>
  );
};

export default React.memo(FolderProps);
