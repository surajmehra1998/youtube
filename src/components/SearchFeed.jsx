import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData(`search?part=snippet&q=${id}`).then((data) => setVideos(data.items));
  }, [id]);

  return (
    <Box sx={{ p: 2, height: "90vh", flex: 2, overflow: "auto" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}>
        Search Results for
        <span style={{ color: "#f31503" }}> {id} </span>videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
