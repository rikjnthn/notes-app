import React from "react";

import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";

const Login = () => {

  const hanldeInpEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inpEmail = e.target.value;

    !inpEmail.includes("@gmail.com")
      ? e.target.setAttribute("aria-invalid", "true")
      : e.target.removeAttribute("aria-invalid");
  };

  const handleInpPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inpPassword = e.target.value;

    inpPassword.length < 8
      ? e.target.setAttribute("aria-invalid", "true")
      : e.target.removeAttribute("aria-invalid");
  };

  return (
    <Flex
      as="main"
      width="full"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        width="md"
        height="lg"
        borderRadius="md"
        border="1px solid #d8d8d8"
        padding="10"
        flexDirection="column"
        alignItems="center"
      >
        <Heading marginBottom="10">Login</Heading>
        <Flex as="form" action="" method="" width="full" height="full">
          <FormControl display="flex" flexDirection="column" gap="10">
            <div>
              <FormLabel>Email</FormLabel>
              <Input
                onInput={hanldeInpEmail}
                type="email"
                placeholder="example@gmail.com"
                autoFocus
                required
              />
            </div>
            <div>
              <FormLabel>Password</FormLabel>
              <Input
                onInput={handleInpPassword}
                type="password"
                minLength={8}
                required
              />
            </div>
            <Flex alignItems="center" marginY="auto">
              <Text fontSize="14" color="blackAlpha.700">
                Don't have an account?{" "}
                <Link as={RouterLink} to="/sign-up" textDecoration="underline">
                  Sign Up
                </Link>
              </Text>

              <Input
                type="submit"
                width="6rem"
                marginLeft="auto"
                border="none"
                backgroundColor="blue.400"
                color="white"
                _hover={{ backgroundColor: "blue.600" }}
              />
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default React.memo(Login);
