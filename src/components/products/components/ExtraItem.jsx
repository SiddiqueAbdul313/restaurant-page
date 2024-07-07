import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

function ExtraItem({ img }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCardClick = () => {
    // Toggle the checkbox state when the card is clicked
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: "14px", fontWeight: "700", fontFamily: "'montserrat', sans-serif" }}
        >
          You may also like
        </Typography>
        <Grid sx={{ flexGrow: 1 }} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {[0, 1, 2].map((value) => (
                <Grid
                  key={value}
                  item
                  sx={{
                    "@media (min-width:300px)": {
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                    },
                  }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={handleCardClick}
                  >
                    <CardActionArea>
                      <CardMedia component="img" image={img} />
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: 600,
                          fontFamily: "'montserrat', sans-serif",
                        }}
                      >
                        Coca Cola
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "16px",
                          fontWeight: 700,
                          fontFamily: "'montserrat', sans-serif",
                        }}
                      >
                        € 2.56
                      </Typography>
                      {isChecked && (
                        <Checkbox
                          defaultChecked={true}
                          onChange={() => setIsChecked(!isChecked)}
                          sx={{
                            position: "absolute",
                            top: "5%",
                            right: "5%",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                          }}
                        />
                      )}
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

ExtraItem.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ExtraItem;
