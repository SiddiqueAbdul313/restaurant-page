import { Button, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const AddToCart = (props) => {
  const handleIncrement = () => {
    props.setCartCount(props.cartCount + 1);
  };

  const handleDecrement = () => {
    if (props.cartCount > 0) {
      props.setCartCount(props.cartCount - 1);
    }
  };
  const handleAddToCart = () => {
    if (props.cartCount === 0) {
      alert("No items to add to cart");
    } else {
      alert(`${props.cartCount} items added to the cart!`);
    }
    props.setCartCount(props.cartCount);
  };

  const buttonStyles = {
    fontWeight: 700,
    border: "1px solid #98A1B2",
    minWidth: "36px",
    height: "36px",
    borderRadius: "60%",
    "@media (max-width: 600px)": {
      justifyContent: "center",
      margin: "auto",
    },
    fontFamily: "'montserrat', san-serif", // Added fontFamily
  };

  const boxStyles = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px",
    alignItems: "center",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  };

  const TypographyStyles = {
    m: 1,
    fontWeight: 700,
    fontSize: "14px",
    fontFamily: "'montserrat', san-serif", // Added fontFamily
  };
  const addToCartStyles = {
    borderRadius: "25px",
    backgroundColor: "#00D9FF",
    fontSize: "14px",
    height: "40px",
    fontWeight: 700,
    color: "#000",
    minWidth: "180px",
    "@media (max-width: 900px)": {
      margin: "20px 0px",
    },
    fontFamily: "'montserrat', san-serif", // Added fontFamily
  };

  const incre_dec_box = {
    display: "flex",
  };

  return (
    <>
      <Box sx={boxStyles}>
        <Box sx={incre_dec_box}>
          <Button
            variant="text"
            onClick={handleDecrement}
            size="small"
            sx={buttonStyles}
          >
            -
          </Button>
          <Typography variant="h6" sx={TypographyStyles}>
            {props.cartCount}
          </Typography>
          <Button
            variant="contained"
            onClick={handleIncrement}
            size="small"
            sx={buttonStyles}
          >
            +
          </Button>
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={addToCartStyles}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Box>
    </>
  );
};

AddToCart.propTypes = {
  cartCount: PropTypes.string.isRequired,
  setCartCount: PropTypes.func.isRequired,
};

export default AddToCart;
