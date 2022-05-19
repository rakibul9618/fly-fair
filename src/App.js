import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AirlinesList from "./components/AirlinesList";
import Service from "./components/Service";
import SpecialService from "./components/SpecialService";
import ChoiceUS from "./components/ChoiceUS";
import CeoDesk from "./components/CeoDesk";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <Container component="div">
      <Navbar />
      <div style={{ position: "relative" }}>
        <Header />
        <Form />
      </div>
      <AirlinesList />
      <Service />
      <SpecialService />
      <ChoiceUS />
      <CeoDesk />
      <Footer />
    </Container>
  );
}

export default App;
