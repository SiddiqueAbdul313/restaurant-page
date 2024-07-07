import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function SubHeaderTextField(props) {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    props.setSearchTerm(value);
  };

  return (
    <div>
      <form>
        <TextField
          fullWidth
          sx={{
            padding: "0px 5px",
            "@media (min-width: 350px)": {
              minWidth: "300px",
              paddingTop:"10px"
            },
            display: { xs: "block", sm: "none", width: "250px" },
          }}
          id="outlined-size-small"
          // placeholder="Search..."
          value={props.searchTerm}
          inputProps={{
            style: { width: "100%", 
            height:"8px",
          },
          }}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}

SubHeaderTextField.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};

export default SubHeaderTextField;
