/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import dummyImg from "../../../assets/images/products/burgers/burger1.png";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

function SingleProduct(props) {
  const data = props.products;
  const productId = props.productId;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleShoppingBagClick = (index, id) => {
    setSelectedItemIndex((prevIndex) => (prevIndex === index ? null : index));
    index === selectedItemIndex;
    setIsOpen(true);
    props.setProductId(id);
  };

  function isValidImageUrl(url) {
    const img = new Image();
    img.src = url;
    return img.complete && img.width > 0 && img.height > 0;
  }

  return (
    <div >
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 1 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {data
          ?.filter((product) =>
            props.debouncedSearchTerm
              ? product.title
                  .toLowerCase()
                  .includes(props.debouncedSearchTerm.toLowerCase())
              : true
          )
          ?.map((product, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ px:0.5,my:1 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow:"none",
                    mx:1,
                  }}
                  key={product.id}
                >
                  <CardActionArea
                    sx={{ padding: "20px 15px" }}
                    onClick={() => {
                      handleShoppingBagClick(index, product.id);
                    }}
                  >
                    {isValidImageUrl(product.imageUrl) ? (
                      <CardMedia component="img" image={product.imageUrl} />
                    ) : (
                      <CardMedia component="img" image={dummyImg} />
                    )}
                    <CardContent sx={{my:1,p:0}} className="card_content">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: 700, fontSize: "16px",fontFamily:"montserrat" }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: 400, fontSize: "13px",fontFamily:"montserrat" }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ justifyContent: "space-between" ,
                  paddingBottom:"20px",
                }}>
                    <Button
                      color="primary"
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#000",
                        fontFamily:"montserrat",
                      }}
                    >
                      € {product.price}
                    </Button>
                    <ShoppingBagOutlinedIcon
                      fontSize="small"
                      sx={{
                        backgroundColor:
                          selectedItemIndex === index ? "#0B96D2" : "#FFFFFF",
                        borderRadius: "50%",
                        border: "1px solid #CED4E0",
                        color:
                          selectedItemIndex === index ? "#FFFFFF" : "#CED4E0",
                        padding: "5px",
                        cursor: "pointer",
                        transition: ".3s",
                      }}
                      onClick={() => {
                        handleShoppingBagClick(index, product.id);
                      }}
                    />
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        {data &&
          data.length > 0 &&
          data.filter((product) =>
            props.debouncedSearchTerm
              ? product.title
                  .toLowerCase()
                  .includes(props.debouncedSearchTerm.toLowerCase())
              : true
          ).length === 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", mt: 2, px: 2 }}
            >
              {`No products found for   " ${props.debouncedSearchTerm} "`}
            </Typography>
          )}
      </Grid>
      <ProductDetails
        isOpen={isOpen}
        setIsOpen={(value) => {
          setIsOpen(value);
          setSelectedItemIndex(null);
        }}
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        productId={productId}
      />
    </div>
  );
}

export default SingleProduct;
