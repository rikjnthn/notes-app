import React, { useState, useEffect, useRef } from "react";

import {
  Flex,
  Stack,
  Input,
  FormControl,
  FormErrorMessage,
  Image,
  Button,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Hamburger } from "../../assets";
import User from "./User";
import AddFolder from "./AddFolder";
import Setting from "./Setting";
import FolderProps from "./FolderProps";

export interface FolderType {
  folderList: string[];
  isAddFolder: boolean;
  inpFolderName: string;
  inpFolderInvalid: boolean;
}

export let folderName: Array<string> = [];

const SideNav = () => {
  const saveNotes =
    localStorage.getItem("notes") ??
    JSON.stringify({
      folderList: [],
      isAddFolder: false,
      inpFolderName: "",
      inpFolderInvalid: false,
    });
  const [folder, setFolder] = useState<FolderType>(JSON.parse(saveNotes));
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const { folderList, inpFolderInvalid, inpFolderName, isAddFolder } = folder;

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(folder));
    folderName = folderList.map((x) => x);
  }, [folderList]);

  const addFolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.currentTarget.value;
    if (inp) {
      folderList.includes(inp)
        ? setFolder((prevState) => {
            return {
              ...prevState,
              inpFolderName: inp,
              inpFolderInvalid: true,
            };
          })
        : setFolder((prevState) => {
            return {
              ...prevState,
              inpFolderName: inp,
              inpFolderInvalid: false,
            };
          });
    } else {
      setFolder((prevState) => {
        return {
          ...prevState,
          inpFolderName: "",
          inpFolderInvalid: true,
        };
      });
    }
  };

  const addFolderBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.currentTarget.value;
    if (inp) {
      folderList.includes(inp)
        ? setFolder((prevState) => {
            return {
              ...prevState,
              inpFolderName: inp,
              inpFolderInvalid: true,
            };
          })
        : setFolder((prevState) => {
            return {
              ...prevState,
              inpFolderName: inp,
              isAddFolder: false,
              inpFolderInvalid: false,
              folderList: [...folderList, inpFolderName],
            };
          });
    } else {
      setFolder((prevState) => {
        return {
          ...prevState,
          inpFolderName: "",
          isAddFolder: false,
          inpFolderInvalid: false,
        };
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inpFolderInvalid) return false;

    setFolder((preState) => {
      return {
        ...preState,
        folderList: [...folderList, inpFolderName],
        inpFolderName: "",
        isAddFolder: false,
      };
    });
  };

  const hamburgerClick = () => {
    setSideNavOpen((prev) => !prev);
  };
  return (
    <Flex userSelect="none">
      <Button
        onClick={hamburgerClick}
        marginRight="5"
        display={{ md: "none" }}
        marginTop="8"
        marginLeft="2"
        backgroundColor="transparent"
        _hover={{
          backgroundColor: "transparent",
        }}
      >
        <Image src={Hamburger} alt="hamburger icon" />
      </Button>
      <Flex
        as="nav"
        ref={navRef}
        width={{ base: "20rem", md: "25rem" }}
        height="100vh"
        position={{ base: "absolute", md: "static" }}
        flexDirection="column"
        paddingY="8"
        borderRight="1px solid #c5c5c5"
        transition="all 500ms"
        transform="auto"
        translateX={{ base: sideNavOpen ? "0" : "-20rem", md: "0" }}
        backgroundColor="white"
        zIndex="1"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <User />
          <Button
            onClick={hamburgerClick}
            marginRight="5"
            display={{ md: "none" }}
            backgroundColor="transparent"
            _hover={{
              backgroundColor: "transparent",
            }}
          >
            <Image src={Hamburger} alt="hamburger icon" />
          </Button>
        </Flex>
        <Stack spacing="8" marginTop="10" height="100%" overflowY="scroll">
          {folderList.map((value, index) => {
            return (
              <FolderProps
                folderName={value}
                setFolder={setFolder}
                key={index}
              />
            );
          })}

          {isAddFolder ? (
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={inpFolderInvalid}>
                <Input
                  type="text"
                  placeholder="Folder name"
                  autoFocus
                  autoComplete="off"
                  onInput={addFolderName}
                  onBlur={addFolderBlur}
                  borderRadius="none"
                  display="block"
                  width="calc(100% - 1.25rem)"
                  marginLeft="5"
                  focusBorderColor="none"
                />
                {inpFolderInvalid ? (
                  <FormErrorMessage marginLeft="5">
                    {inpFolderName
                      ? "A folder {inpFolderName} is already exist"
                      : "Enter folder name"}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            </form>
          ) : null}
        </Stack>
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          height="32"
          marginTop="auto"
        >
          <AddFolder setFolderState={setFolder} />
          <Setting />
        </Flex>
      </Flex>
      <Flex
        as="main"
        width="full"
        overflowY="scroll"
        position={{ base: "relative" }}
        zIndex={sideNavOpen ? "-1" : "0"}
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default React.memo(SideNav);
