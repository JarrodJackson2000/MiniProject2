import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
    </Routes>
  );
}
