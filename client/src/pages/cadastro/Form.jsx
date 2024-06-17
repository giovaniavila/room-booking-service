import React, { useState } from "react";
import axios from "axios";
import {
  Stack,
  FormControl,
  Input,
  Button,
  FormLabel,
  Grid,
} from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Home from "../home";

const initialState = {
  name: "",
  foto: null,
  local: "",
  data: "",
  horaInicial: "",
  horaFinal: "",
  responsavel: "",
  motivo: "",
  informacaoGeral: "",
  convidados: "",
};

function formController() {
  const [formState, setFormState] = useState(initialState);
  const {isLoggedIn} = useAuth();

  const handleChange = (e) => {
    const newValue =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://34.204.67.56:3000/cadastro",
        formState
      );
      console.log("Evento inserido com sucesso:", response.data);
      setFormState(initialState);
    } catch (error) {
      console.error("Erro ao inserir evento:", error);
    }
  };

  return { formState, handleChange, handleSubmit };
}

const Formulario = () => {
  const { formState, handleChange, handleSubmit } = formController();

  return (
    <form onSubmit={handleSubmit}>
      <Grid gridTemplateColumns="repeat(2,1fr)" gap="80px">
        <Grid>
          <Stack spacing={7}>
            <FormControl id="name">
              <FormLabel>Nome da sala</FormLabel>
              <Input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="foto">
              <FormLabel>Foto</FormLabel>
              <Input
                type="file"
                border="none"
                borderBottom="1px solid #E2E8F0"
                name="foto"
                onChange={handleChange}
                _hover={{ cursor: "pointer" }}
              />
            </FormControl>
            <FormControl id="local">
              <FormLabel>Local</FormLabel>
              <Input
                type="text"
                name="local"
                value={formState.local}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="data">
              <FormLabel>Data</FormLabel>
              <Input
                type="date"
                name="data"
                value={formState.data}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="horaInicial">
              <FormLabel>Hora inicial</FormLabel>
              <Input
                type="time"
                name="horaInicial"
                value={formState.horaInicial}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid>
          <Stack spacing={7}>
            <FormControl id="horaFinal">
              <FormLabel>Horário final</FormLabel>
              <Input
                type="time"
                name="horaFinal"
                value={formState.horaFinal}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="responsavel">
              <FormLabel>Responsável pelo uso</FormLabel>
              <Input
                type="text"
                name="responsavel"
                value={formState.responsavel}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="motivo">
              <FormLabel>Motivo do uso</FormLabel>
              <Input
                type="text"
                name="motivo"
                value={formState.motivo}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="informacaoGeral">
              <FormLabel>Informação geral</FormLabel>
              <Input
                type="text"
                name="informacaoGeral"
                value={formState.informacaoGeral}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="convidados">
              <FormLabel>Convidados</FormLabel>
              <Input
                type="text"
                name="convidados"
                value={formState.convidados}
                onChange={handleChange}
              />
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
    </form>
  );
};

export default Formulario;
