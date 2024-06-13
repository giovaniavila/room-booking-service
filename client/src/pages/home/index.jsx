import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { SearchBar } from "../../components/SearchBar";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://52.206.212.46:3000/salas");
        console.log(response.data)
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Grid gridTemplateColumns="0.1fr 1fr" h="100vh">
      <Sidebar />
      <Grid
        placeContent="start center"
        padding="2rem"
        maxH="50rem"
        overflowY="auto"
        w="auto"
      >
        <SearchBar value={searchTerm} onChange={handleSearch} />
        <Box padding="1rem" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" width="auto">
          <Heading as="h2" size="lg" mb={4}>
            Lista de Salas
          </Heading>
          <Divider mb={4} />
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Nome da Sala</Th>
                <Th>Foto</Th>
                <Th>Local</Th>
                <Th>Data</Th>
                <Th>Hora Inicial</Th>
                <Th>Hora Final</Th>
                <Th>Responsável</Th>
                <Th>Motivo</Th>
                <Th>Informação Geral</Th>
                <Th>Convidados</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((item) => (
                <Tr key={item.id_sala_presencial}>
                  <Td>{item.name}</Td>
                  <Td>
                    <img src={item.foto} alt="Foto da sala" width="50" />
                  </Td>
                  <Td>{item.local}</Td>
                  <Td>{item.data}</Td>
                  <Td>{item.horaInicial}</Td>
                  <Td>{item.horaFinal}</Td>
                  <Td>{item.responsavel}</Td>
                  <Td>{item.motivo}</Td>
                  <Td>{item.informacaoGeral}</Td>
                  <Td>{item.convidados}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
