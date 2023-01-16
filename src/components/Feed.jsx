import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchData } from "../utils/fetchData";
const Feed = () => {
  //dynamic sidebar selected btn
  const [selectedCategory, setSelectedCategory] = useState("New");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }} className="copyright">
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box sx={{ p: 2, height: "90vh", flex: 2, overflow: "auto" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}>
          {selectedCategory}
          <span style={{ color: "#f31503" }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
