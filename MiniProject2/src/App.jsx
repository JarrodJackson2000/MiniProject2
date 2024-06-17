import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;
