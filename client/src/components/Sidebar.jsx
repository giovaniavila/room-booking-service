import React from "react";
import { Grid, Box, Text, Flex, Image } from "@chakra-ui/react";
import { FiUser, FiHome } from "react-icons/fi";
import cabin from "../assets/cabin.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Flex flexDirection="column" h="100%" bg="#1F1F1F" color="white">
      <Flex padding="15px" gap="8px">
        <Image src={cabin} h="20px" />
        <Text fontWeight="700">LOGO</Text>
      </Flex>
      <Flex gap="10px" flexDirection="column" alignItems="start" padding="10px">
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <Flex
            alignItems="center"
            gap="8px"
            _hover={{
              bgColor: "#4C47BF",
              cursor: "pointer",
              transition: ".3s",
              borderRadius: "5px",
            }}
            padding="8px 10px"
            w="120px"
          >
            <FiHome size="15px" />
            <Text fontSize="15px">Home</Text>
          </Flex>
        </Link>
        <Link
          to="/cadastro"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Flex
            alignItems="center"
            gap="8px"
            padding="8px 10px"
            w="120px"
            _hover={{
              bgColor: "#4C47BF",
              cursor: "pointer",
              transition: ".3s",
              borderRadius: "5px",
            }}
          >
            <FiUser size="15px" />
            <Text fontSize="15px">Adicionar</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
