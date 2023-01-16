import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchData } from "../utils/fetchData";

const VideoDetails = () => {
  const [videoDetails, setVideosDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  console.log(videoDetails);
  // console.log(id);
  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideosDetails(data.items[0]));

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetails?.snippet) {
    return <Typography color={"#fff"}>Loading...</Typography>;
  }
  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  console.log(title);
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: 0 }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" />
            <Box sx={{ color: "#fff", mt: "10px" }}>
              <Typography color={"#fff"}> {title}</Typography>
              <Box sx={{ color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Stack direction={"row"} alignItems="center">
                  <Link to={`/channel/${channelId}`} style={{ color: "#fff" }}>
                    <Typography>{channelTitle}</Typography>
                  </Link>
                  <CheckCircle sx={{ ml: "5px", fontSize: "12px" }} />
                </Stack>
                <Stack direction={"row"} justifyContent="space-between" alignItems="center" gap={"10px"}>
                  <Typography>{parseInt(viewCount).toLocaleString()} views</Typography>
                  <Typography>{parseInt(likeCount).toLocaleString()} likes</Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems={"center"}>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
