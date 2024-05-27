import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login/index";
import Home from "../pages/home/index";
import RoomRegister from "../pages/cadastro/RoomRegister";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<RoomRegister />} />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
