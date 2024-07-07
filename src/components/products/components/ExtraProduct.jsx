import PropTypes from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import React from "react";

function ExtraProduct({ label, parentOption }) {
  return (
    <>
      <Typography className="product__title">{label}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        {parentOption?.options?.map((childOption) => (
          <React.Fragment key={childOption?.id}>
            <FormControlLabel
              control={<Checkbox defaultChecked={false} />}
              label={childOption?.name}
            />
            <Typography sx={{ px: 0, width: "26px" }}>
              € {childOption?.price}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}

ExtraProduct.propTypes = {
  label: PropTypes.string.isRequired,
  parentOption: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ExtraProduct;
