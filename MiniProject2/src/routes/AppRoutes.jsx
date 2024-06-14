import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import BestSeller from "../components/BestSeller";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
    </Routes>
  );
}
