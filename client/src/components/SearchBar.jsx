import React from "react";
import { Button, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({ value, onChange }) => {
  return (
    <>
      <InputGroup borderRadius={5} w="300px" mb="5px">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          value={value}
          onChange={onChange}
        />
        <InputRightAddon p={0} border="none">
          <Button
            size="sm"
            ml="10px"
            h="42px"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
            backgroundColor="#5F57CF"
            color="white"
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
