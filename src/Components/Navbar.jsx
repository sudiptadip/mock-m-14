import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      w={"100%"}
      h={"80px"}
      border={"1px solid black"}
      boxShadow={"2xl"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={'twitter.500'}
      color={'white'}
      fontSize={'22px'}
      fontWeight={'500'}
      marginBottom={'40px'}
    >
      <Box>
        <Link to={"/"}>Homepage</Link>
      </Box>
      <Box>
        <Link to={"/search"}>Search</Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
