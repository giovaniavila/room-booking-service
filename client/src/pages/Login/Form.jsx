import React from "react";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

function loginFormControl() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("UserName: ", userName);
    console.log("password: ", password);
  }

  return { userName, setUsername, setPassword, handleSubmit };
}

const Form = () => {
  const { userName, password, setUsername, setPassword, handleSubmit } = loginFormControl();
  return (
    <Flex flexDirection="column" gap="20px" paddingTop="1.5rem">
      <FormControl>
        <FormLabel id="userName" isRequired>
          Name
        </FormLabel>
        <Input
          type="text"
          h="3.125rem"
          placeholder="Enter your username"
          fontSize="0.875rem"
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
          color="gray.400"
        />
      </FormControl>
      <FormControl>
        <FormLabel id="password" isRequired>
          Password
        </FormLabel>
        <Input
          type="password"
          h="3.125rem"
          fontSize="0.875rem"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormControl>
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
  );
};

export default Form;
