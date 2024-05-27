import Login from "./pages/Login/index";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
