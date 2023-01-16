import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetails, ChannelDetail, SearchFeed } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} exact />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
