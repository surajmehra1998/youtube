import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoChannelTitle, demoChannelUrl, demoVideoUrl, demoThumbnailUrl, demoVideoTitle } from "../utils/conatant";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId);
  return (
    <Card sx={{ width: { xs: "100%", md: 320 }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { xs: "100%", md: 358 }, height: 180 }} />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 80 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: "bold" }}>
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: "bold" }}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, ml: 5, color: "grey" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
