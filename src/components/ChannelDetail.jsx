import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchData } from "../utils/fetchData";
const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]));

    fetchData(`search?channelid=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  console.log(channelDetails, videos);
  return (
    <Box>
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)",
            zIndex: 10,
            height: "200px",
          }}
        ></div>
        <ChannelCard channelDetails={channelDetails} marginTop={"-110px"} />
      </Box>
      <Box sx={{ margin: "10px auto", maxWidth: { sm: "100%", md: "75%" } }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
