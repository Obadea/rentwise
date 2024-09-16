import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import binoculars from "../../../assets/binoculars.png";

function SearchBetter() {
  return (
    <div>
      <div>
        <CancelPresentationIcon />
      </div>
      <div>
        <img src={binoculars} alt="" />
      </div>
    </div>
  );
}

export default SearchBetter;
