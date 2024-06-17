import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../MainPage";
import LoginPage from "../LoginPage";
import CreateAccountPage from "../CreateAccountPage";
import CartPage from "../CartPage";
import { UserContext } from "../UserContext";

export default function AppRoutes() {
  const { userEmail } = useContext(UserContext);

  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route
        path="/cart"
        element={userEmail ? <CartPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
