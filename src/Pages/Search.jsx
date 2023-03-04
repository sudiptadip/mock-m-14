import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { breakpoints } from "../Components/breackpoint";
import ProductCart from "../Components/ProductCart";

function Search() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [click,setClick] = useState(false)

  function Searching() {
    axios
      .get(`https://dummyjson.com/products/search?q=${value}`)
      .then((e) => setData(e.data.products));
      setTimeout(() => {
        setClick(true)
      },1000)
  }

  return (
    <Box>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Input
          w={'40%'}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"search"}
        />
        <Button colorScheme={'blue'} onClick={Searching}>Search</Button>
      </Flex>
      <Grid padding={"20px"} templateColumns={breakpoints} gap={6}>
        {data.map((e, i) => (
          <ProductCart {...e} key={i} />
        ))}
      </Grid>
      {click && data.length === 0 && <Text textAlign={'center'} fontSize={'20px'} fontWeight={500} >Oops! No Result Available</Text>}
    </Box>
  );
}

export default Search;
