import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function MainHeaderTextField(props) {
    
    const handleSearchChange = (event) => {
      const value = event.target.value;
      props.setSearchTerm(value);
    };
  return (
    <div>
        <form>
        <TextField
          sx={{
            mx:2,
            alignItems:"center",
            display: { xs: "none", sm:"inline-block" },
          }}
          id="outlined-size-small"
          className="header_search"
          size="small"
          placeholder="Search..."
          inputProps={{ style: { width: "250px", height: "20px" } }}
          value={props.searchTerm}
          onChange={handleSearchChange}
        />
      </form>
 
    </div>
  )
}

MainHeaderTextField.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};
export default MainHeaderTextField;