import React, { useState } from "react";
import { IconButton, Typography, Snackbar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { SvgTumbDownIcon, SvgTumbUpIcon } from "../../../utils/SvgIcons";
import { useAuth } from "../../../utils/AuthContext";

const ThumbsRating = ({ user }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteType, setVoteType] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { token } = useAuth();

  const handleVote = (type) => {
    if (!token) {
      setOpenSnackbar(true);
      return; // User must be logged in
    }

    if (hasVoted) {
      // User has already voted
      return;
    }

    if (type === "up") {
      setUpvotes(upvotes + 1);
    } else {
      setDownvotes(downvotes + 1);
    }

    setHasVoted(true);
    setVoteType(type);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="flex items-center justify-end">
      <IconButton
        onClick={() => handleVote("up")}
        color="primary"
        disabled={hasVoted && voteType === "up"}
      >
        {/* <ThumbUpIcon /> */}
        <SvgTumbUpIcon />
      </IconButton>
      <Typography variant="body1">{upvotes}</Typography>

      <IconButton
        onClick={() => handleVote("down")}
        color="secondary"
        disabled={hasVoted && voteType === "down"}
      >
        {/* <ThumbDownIcon /> */}
        <SvgTumbDownIcon />
      </IconButton>
      <Typography variant="body1">{downvotes}</Typography>

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message="You must be logged in to vote!"
        autoHideDuration={3000}
      />
    </div>
  );
};

export default ThumbsRating;
