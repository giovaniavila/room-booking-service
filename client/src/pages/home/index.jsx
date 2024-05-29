import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <Grid gridTemplateColumns="0.1fr 1fr" h="100vh">
      <Sidebar />
      <Box bg="#333333" color="white">
        My content
      </Box>
    </Grid>
  );
};

export default Home;
