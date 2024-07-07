import logo from "../../assets/images/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge, Button } from "@mui/material";
import PropTypes from "prop-types";
import "../../assets/styles/headers/mainheader.css";
import MainHeaderTextField from "./MainHeaderTextField";
function MainHeader(props) {
  
  return (
    <div className="main_header">
      <div className="header_left_section">
        <div style={{ display: "flex", alignItems: "center",
        
      
      }}>
          <img src={logo} alt="" className="logo" />
          <MainHeaderTextField
            searchTerm={props.searchTerm}
            setSearchTerm={props.setSearchTerm}
            debouncedSearchTerm={props.debouncedSearchTerm}
          />
        </div>
      </div>
      <div className="header_right_section">
        <div className="shopping_bag">
          <Badge badgeContent={props.cartCount} color="primary">
            <ShoppingBagOutlinedIcon sx={{ color: "#fafafa" }} />
          </Badge>
          <label className="cart_name">Bag</label>
        </div>
        <Button
          variant="text"
          className="login"
          sx={{ fontFamily: "montserrat" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
MainHeader.propTypes = {
  cartCount: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  debouncedSearchTerm: PropTypes.string.isRequired,
};

export default MainHeader;
