import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";
import PropTypes from "prop-types";

function Headers(props) {

  return (
    <div>
      <MainHeader
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        searchTerm={props.searchTerm}
        setSearchTerm={props.setSearchTerm}        
      />
      <SubHeader 
      setCartCount={props.setCartCount}
      searchTerm={props.searchTerm}
      setSearchTerm={props.setSearchTerm}
      />
    </div>
  );
}
Headers.propTypes = {
  cartCount: PropTypes.string.isRequired,
  setCartCount: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};
export default Headers;
