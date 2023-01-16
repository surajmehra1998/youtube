import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/conatant";
const ChannelCard = ({ channelDetails, marginTop }) => {
  console.log(channelDetails);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "350px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", color: "#fff" }}>
          <CardMedia
            image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3" }}
          />
          <Typography>
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} subcribers</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
