import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function ProductCart({ thumbnail, title, description, price }) {
  return (
    <Box boxShadow={'xl'} borderRadius={'10px'} border={'1px solid black'} p={'20px'} cursor={'pointer'} >
      <Flex justifyContent={'center'} alignItems={'center'} >
        <Image maxHeight={'200px'} borderRadius={'10px'} src={thumbnail} />
      </Flex>
      <Box>
        <Text fontWeight={'500'} fontSize={'18px'} mt={'10px'} mb={'10px'} >{title}</Text>
        <Text fontWeight={'400'} >{description}</Text>
        <Text fontWeight={'500'} >Price : - {price}/-</Text>
      </Box>
    </Box>
  );
}

export default ProductCart;
