import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Text,
  Link,
  Container,
  FormErrorMessage,
} from "@chakra-ui/react";

interface SignUpType {
  inpPassword: string;
  inpConfirmPassword: string;
  inpEmail: string;
  emailInvalid: boolean;
  passwordInvalid: boolean;
  confirmPasswordInvalid: boolean;
}

const SignUp = () => {
  const [next, setNext] = useState(false);

  const [signUpState, setSignUpState] = useState<SignUpType>({
    inpPassword: "",
    inpConfirmPassword: "",
    inpEmail: "",
    emailInvalid: false,
    passwordInvalid: false,
    confirmPasswordInvalid: false,
  });

  const {
    confirmPasswordInvalid,
    emailInvalid,
    passwordInvalid,
    inpConfirmPassword,
    inpPassword,
    inpEmail,
  } = signUpState;

  const handleOnSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const hanldeInpEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inpEmail = e.target.value;

    inpEmail.includes("@gmail.com")
      ? setSignUpState((prevState) => {
          return {
            ...prevState,
            inpEmail,
            emailInvalid: false,
          };
        })
      : setSignUpState((prevState) => {
          return {
            ...prevState,
            emailInvalid: true,
          };
        });
  };

  const handleInpPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inpPassword = e.target.value;

    inpPassword.length < 8
      ? setSignUpState((prevState) => {
          return {
            ...prevState,
            passwordInvalid: true,
          };
        })
      : setSignUpState((prevState) => {
          return {
            ...prevState,
            passwordInvalid: false,
            inpPassword,
          };
        });
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpState((prevState) => {
      return {
        ...prevState,
        inpConfirmPassword: e.target.value,
      };
    });
  };

  const nextForm = () => {
    if (!inpEmail) {
      setSignUpState((prevState) => {
        return {
          ...prevState,
          emailInvalid: true,
        };
      });
    }
    if (!inpPassword) {
      setSignUpState((prevState) => {
        return {
          ...prevState,
          passwordInvalid: true,
        };
      });
    }
    if (!inpConfirmPassword) {
      setSignUpState((prevState) => {
        return {
          ...prevState,
          confirmPasswordInvalid: true,
        };
      });
    }

    if (!passwordInvalid) {
      if (inpConfirmPassword === inpPassword) {
        setSignUpState((prevState) => {
          return {
            ...prevState,
            confirmPasswordInvalid: false,
          };
        });
        !confirmPasswordInvalid && !emailInvalid && !passwordInvalid
          ? setNext(() => true)
          : null;
      } else {
        setSignUpState((prevState) => {
          return {
            ...prevState,
            confirmPasswordInvalid: true,
          };
        });
      }
    }
  };

  const confirmPasswordBlur = () => {
    if (inpConfirmPassword === inpPassword) {
      setSignUpState((prevState) => {
        return {
          ...prevState,
          confirmPasswordInvalid: false,
        };
      });
    } else {
      setSignUpState((prevState) => {
        return {
          ...prevState,
          confirmPasswordInvalid: true,
        };
      });
    }
  };

  return (
    <Flex
      as="main"
      width="full"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      userSelect="none"
    >
      <Flex
      as='section'
        width="md"
        height="xl"
        borderRadius="md"
        border="1px solid #d8d8d8"
        padding="10"
        flexDirection="column"
        alignItems="center"
      >
        <Heading marginBottom="10">Sign Up</Heading>
        <Container
          onSubmit={handleOnSubmit}
          as="form"
          width="full"
          height="full"
          overflow="hidden"
        >
          <Flex
            flexDirection="column"
            height="full"
            transform="auto"
            translateY={`${next ? "calc(100% * -1)" : null}`}
            gap="6"
            transitionDuration="500ms"
          >
            <FormControl isInvalid={emailInvalid} height="24" paddingInline="0">
              <FormLabel>Email</FormLabel>
              <Input
                onInput={hanldeInpEmail}
                type="email"
                placeholder="example@gmail.com"
                autoFocus
                required
              />
              {emailInvalid ? (
                <FormErrorMessage>Your email is not valid</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={passwordInvalid}
              paddingInline="0"
              height="24"
            >
              <FormLabel>Password</FormLabel>
              <Input
                onInput={handleInpPassword}
                className="tes"
                type="password"
                minLength={8}
                required
              />
              {passwordInvalid ? (
                <FormErrorMessage>
                  Your password should be 8 characters or more
                </FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={confirmPasswordInvalid}
              height="24"
              paddingInline="0"
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                onInput={handleConfirmPassword}
                onBlur={confirmPasswordBlur}
                type="password"
                minLength={8}
                required
              />
              {confirmPasswordInvalid ? (
                <FormErrorMessage>
                  Your confirm password did not match{" "}
                </FormErrorMessage>
              ) : null}
            </FormControl>
            <Flex alignItems="center" marginTop="auto">
              <Text fontSize="14" color="blackAlpha.700">
                Already have an account?{" "}
                <Link as={RouterLink} to="/login" textDecoration="underline">
                  Login
                </Link>
              </Text>

              <Input
                onClick={nextForm}
                type="button"
                value="Next"
                width="6rem"
                marginLeft="auto"
                border="none"
                backgroundColor="blue.400"
                color="white"
                _hover={{ backgroundColor: "blue.600" }}
              />
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            gap="10"
            height="full"
            transform="auto"
            translateY={`${next ? "calc(100% * -1)" : 20}`}
            transitionDuration="500ms"
          >
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="text" required />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <Flex marginTop="auto">
              <Input
                onClick={() => setNext(() => false)}
                type="button"
                value="Before"
                width="6rem"
                outline="1px solid #c3c8d0"
                border="none"
                _hover={{
                  color: "white",
                  backgroundColor: "blue.500",
                  outline: "none",
                }}
              />
              <Input
                type="submit"
                width="6rem"
                marginLeft="auto"
                border="none"
                backgroundColor="blue.400"
                color="white"
                _hover={{ backgroundColor: "blue.500" }}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};

export default React.memo(SignUp);
