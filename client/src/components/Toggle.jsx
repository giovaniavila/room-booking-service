import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button  onClick={toggleColorMode} variant="outline">
      {colorMode === "light" ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

export default ThemeToggle;
