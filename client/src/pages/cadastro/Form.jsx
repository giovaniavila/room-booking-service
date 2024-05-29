import React from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  FormLabel,
  Grid,
} from "@chakra-ui/react";

function formController() {}

const Form = () => {
  return (
    <Grid gridTemplateColumns="repeat(2,1fr)" gap="80px">
      <Grid>
        <Stack spacing={7}>
          <FormControl id="name">
            <FormLabel>Nome da sala</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="foto">
            <FormLabel>Foto</FormLabel>
            <Input
              type="file"
              border="none"
              borderBottom="1px solid #E2E8F0"
              _hover={{ cursor: "pointer" }}
            />  
          </FormControl>
          <FormControl id="local">
            <FormLabel>local</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="data">
            <FormLabel>Data</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl id="horaInicial">
            <FormLabel>Hora inicial</FormLabel>
            <Input type="text" />
          </FormControl>
        </Stack>
      </Grid>
      <Grid>
        <Stack spacing={7}>
          <FormControl id="horaFinal">
            <FormLabel>Horário final</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="responsavel">
            <FormLabel>Responsável pelo uso</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="motivo">
            <FormLabel>Motivo do uso</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="informacao">
            <FormLabel>Informação geral</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="convidados">
            <FormLabel>Convidados</FormLabel>
            <Input type="text" />
          </FormControl>
          <Button
            type="submit"
            bgColor="#6C63FF"
            color="white"
            _hover={{ filter: "brightness(0.8)" }}
          >
            Enviar
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Form;
