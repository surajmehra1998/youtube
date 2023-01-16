import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  // console.log(videos);
  if (!videos?.length) {
    return <Typography sx={{ color: "#fff" }}>Loading...</Typography>;
  }
  return (
    <Stack direction={direction || "row"} justifyContent="start" flexWrap="wrap" gap="20px">
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
