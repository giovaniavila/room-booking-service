import React from "react";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
  Checkbox,
  Link,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Home from "../home";

function LoginForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn, isLoggedIn } = useAuth();

  function handleSubmit() {
    if (userName === "admin" && password === "admin") {
      setIsLoggedIn(true);
      console.log("usuário autenticado");
    } else {
      setIsLoggedIn(false);
      setError("Invalid username or password");
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <Flex flexDirection="column" gap="20px" paddingTop="1.5rem">
          <FormControl>
            <FormLabel htmlFor="userName">Name</FormLabel>
            <Input
              type="text"
              h="3.125rem"
              fontSize="0.875rem"
              id="userName"
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
              color="gray.400"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              h="3.125rem"
              fontSize="0.875rem"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          {error && (
            <Text color="red" fontSize="sm">
              {error}
            </Text>
          )}
          <Flex justifyContent="space-between" marginTop="0.8125rem">
            <Checkbox defaultChecked colorScheme="green" size="sm">
              Do you want to save the password?
            </Checkbox>
            <Link fontWeight="600" color="#6C63FF" fontSize="0.8125rem">
              Forgot the password?
            </Link>
          </Flex>
          <Button
            marginTop="5px"
            onClick={handleSubmit}
            h="3.125rem"
            borderRadius="5px"
            backgroundColor="#6C63FF"
            color="white"
            _hover={{ backgroundColor: "#4C47BF", transition: ".3s" }}
          >
            Login
          </Button>
        </Flex>
      )}
    </>
  );
}

export default LoginForm;
