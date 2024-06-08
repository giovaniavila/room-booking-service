import React from "react";
import Sidebar from "../../components/Sidebar";
import { Grid, Box, Heading } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import Formulario from "./Form";

const RoomRegister = () => {
  return (
    <Grid gridTemplateColumns=".1fr 1fr" h="100vh" >
      <Sidebar />
      <Grid margin="5% 15%" marginTop="50px" borderRadius="5px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Box padding="50px">
          <Heading marginBottom="20px">Cadastro de Salas</Heading>
          <Divider borderWidth="1px" />
          <Box marginTop="20px">
            <Formulario />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RoomRegister;
