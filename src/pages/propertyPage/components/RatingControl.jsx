import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RatingControl() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          if (newValue === 0) {
            setValue(3);
          } else {
            setValue(newValue);
          }
        }}
      />
    </Box>
  );
}
