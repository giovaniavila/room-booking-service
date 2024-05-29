import Login from "./pages/Login/index";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import AppRoutes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false
}

const theme = extendTheme({config})

function App() {
  return (
    <ChakraProvider  theme={theme} >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
