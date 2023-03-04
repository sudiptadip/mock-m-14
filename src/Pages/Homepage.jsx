import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../Redux/AppReducer/Action";
import {useNavigate} from 'react-router-dom'
import { breakpoints } from "../Components/breackpoint";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const data = useSelector((e) => e.AppReducer.data);

  useEffect((e) => {
    dispatch(GetData());
  }, []);

  return (
    <Box>
      <Grid  p={'20px'} templateColumns={breakpoints} gap={6}>
        {data.map((e, i) => (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"18px"}
            fontWeight={400}
            cursor={"pointer"}
            padding={"20px"}
            border={"1px solid black"}
            boxShadow={"xl"}
            key={i}
            onClick={() => navigate('/'+e)}
          >
            {e}
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}

export default Homepage;
