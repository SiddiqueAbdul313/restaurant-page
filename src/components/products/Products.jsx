/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import SingleProduct from "./components/SingleProduct";
import { CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Products(props) {
  const [productId, setProductId] = useState("");
  const [restaurants, setRestaurants] = useState({
    id: "37",
    title: "",
  });
  const { data: productData, isPending } = useQuery({
    queryKey: ["products", restaurants.id],
    queryFn: () => {
      return axios
        .get(
          `https://restly.deventure.ro/api/Product/InitRestaurantMenu?restaurantId=${restaurants.id}`
        )
        .then((res) => res?.data?.data?.menuItemsFirstPage?.data || []);
    },
  });

  return (
    <>
      <Box sx={{ mx: 1, py: 1 }}>
        {/* <Typography
              variant="h5"
              sx={{ fontWeight: 600, padding: "0px 10px 0px" }}
            >
              {category.type}
            </Typography> */}
        {isPending ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <CircularProgress disableShrink />
          </Box>
        ) : productData.length === 0 ? ( // Check if no products are available
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            No products available
          </Typography>
        ) : (
          <SingleProduct
            products={productData}
            productId={productId}
            setProductId={setProductId}
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
            searchTerm={props.searchTerm}
            setSearchTerm={props.setSearchTerm}
            debouncedSearchTerm={props.debouncedSearchTerm}
          />
        )}
      </Box>
    </>
  );
}
Products.propTypes = {
  cartCount: PropTypes.string.isRequired,
  setCartCount: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  debouncedSearchTerm: PropTypes.string.isRequired,
};

export default Products;
