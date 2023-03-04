import React, { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCart from "../Components/ProductCart";
import { breakpoints } from "../Components/breackpoint";

function Product() {
  const { cate } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (cate) {
      axios
        .get(`https://dummyjson.com/products/category/${cate}`)
        .then((e) => setData(e.data.products));
    }
  }, []);
  return (
    <Box>
      <Grid padding={'20px'} templateColumns={breakpoints} gap={6} >
        {data.map((e, i) => (
          <ProductCart {...e} key={i} />
        ))}
      </Grid>
    </Box>
  );
}

export default Product;
