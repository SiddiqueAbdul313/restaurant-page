/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CloseOutlined } from "@mui/icons-material";
import { Box, Drawer, Typography } from "@mui/material";
import ExtraProduct from "./ExtraProduct";
import image from "../../../assets/images/products/img/img1.png";
import ExtraItem from "./ExtraItem";
import SpecificPreferences from "./SpecificPreferences";
import AddToCart from "./AddToCart";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const ProductDetails = (props) => {
  const toggleDrawer = () => () => {
    props.setIsOpen(false);
  };

  const { data: productDetails } = useQuery({
    queryKey: ["key",props.productId],
    queryFn: () => {
      return axios
        .get(
          `https://restly.deventure.ro/api/Product/GetProductById?productId=${JSON.stringify(props.productId)}`
        )
        .then((res) => res.data.data);
    },
  });

  return (
    <div>
      <Drawer
        anchor="right"
        hideBackdrop={true}
        open={props.isOpen}
        PaperProps={{
          sx: {
            width: "100%",
            "@media (min-width: 600px)": {
              width: "35%",
            },
          },
        }}
        className="product__details__drawer"
      >
        <Box sx={{ px: "20px", py: "20px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            >
            <Typography className="product__details__heading">
              Product Details
            </Typography>
            <CloseOutlined
              sx={{ cursor: "pointer" }}
              onClick={toggleDrawer()}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className="product__title">
              {productDetails?.name}
            </Typography>
            <Typography className="product__price">
              € {productDetails?.price}
            </Typography>
          </Box>
          <Box sx={{ py: 1 }}>
            <img
              className="product__img"
              src={productDetails?.imageUrl}
              width="100%"
              alt="burger"
              loading="lazy"
            />
            <Typography className="product__description">
              {productDetails?.description}
            </Typography>
          </Box>
          {/* checkbox */}
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
            Extras
          </Typography>
          {productDetails?.options?.map((option) => {
            return (
              <ExtraProduct
                key={option.id}
                label={option.name}
                parentOption={option}
              />
            );
          })}

          <ExtraItem img={image} />
          <SpecificPreferences />
          <AddToCart
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default ProductDetails;
