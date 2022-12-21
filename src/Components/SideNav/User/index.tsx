import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

const LoginSignUp = ({ path, name }: { path: string; name: string }) => {
  return (
    <Link
      as={RouterLink}
      to={path}
      color="blackAlpha.700"
      textDecoration="underline"
      _hover={{ color: "#2c2c2c" }}
    >
      {name}
    </Link>
  );
};
const User = () => {
  const [user, setUser] = useState({
    useName: "User",
    haveLogin: true,
    photo: "''",
  });

  return (
    <>
      {user.haveLogin ? (
        <Flex
          as="span"
          title="User"
          alignItems="center"
          height="fit-content"
          paddingLeft="5"
          fontSize="lg"
          cursor="context-menu"
          _before={{
            content: user.photo,
            display: "inline-block",
            width: "50px",
            height: "50px",
            borderRadius: "full",
            marginRight: "10px",
            backgroundColor: "hotpink",
          }}
        >
          User
        </Flex>
      ) : (
        <Flex width="full" height="fit-content" justifyContent="center" gap="3">
          <LoginSignUp path="login" name="Login" />
          <span>|</span>
          <LoginSignUp path="sign-up" name="Sign Up" />
        </Flex>
      )}
    </>
  );
};

export default React.memo(User);
