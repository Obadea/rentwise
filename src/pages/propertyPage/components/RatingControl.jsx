import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function RatingControl() {
  const [value, setValue] = React.useState(1);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name="rating"
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
