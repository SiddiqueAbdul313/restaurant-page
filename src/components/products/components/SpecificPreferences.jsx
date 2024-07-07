import { TextField, Typography } from "@mui/material";

function SpecificPreferences() {
  return (
    <div>
      <Typography variant="h6" sx={{fontWeight:700,fontSize:"16px",marginTop:"20px",fontFamily:"'montserrat',san-serif"}}>Specific Preferences?</Typography>
      <TextField
      fullWidth
        placeholder="Add description..."
        sx={{
          marginTop: { xs: "10px", md: "10px" },
          width: "100%",
          maxWidth: "100%", 
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "'montserrat', sans-serif",
          "& input": {
            p:2, 
          },
        }}
      />
    </div>
  );
}

export default SpecificPreferences;
