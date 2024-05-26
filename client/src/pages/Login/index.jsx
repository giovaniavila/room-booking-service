import {
  Grid,
  Box,
  Image,
  Heading,
  Text,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Form from "./Form";
import imagemfilhadaputa from "../../assets/login.svg";
import cabin from "../../assets/cabin.svg";

const index = () => {
  return (
    <Grid gridTemplateColumns="1.2fr 1fr" h="100vh">
      <Box>
        <Image src={imagemfilhadaputa} h="100%" objectFit="cover" />
      </Box>
      <Grid placeContent="start center" padding="5rem">
        <Flex flexDirection="column" gap="5px" w="28rem">
          <Image src={cabin} h="3.75rem" w="2.5rem" />
          <Heading fontSize="2.5rem" marginTop="10px">
            Welcome Back!
          </Heading>
          <Text wordBreak="break" color="#999999">
            Efficiently manage meeting rooms with ease.
          </Text>
        </Flex>
        <Form />
      </Grid>
    </Grid>
  );
};

export default index;
