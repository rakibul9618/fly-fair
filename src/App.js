import * as React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Form from './components/Form';
import AirlinesList from './components/AirlinesList';
import Service from './components/Service';
import SpecialService from './components/SpecialService';
import CeoDesk from './components/CeoDesk';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import Choice from './components/Choice';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="xl" sx={{ position: 'relative', padding: '0px' }}>
        <Header />
        <Form />
      </Container>
      <AirlinesList />
      <Service />
      <SpecialService />
      <Choice />
      <CeoDesk />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
