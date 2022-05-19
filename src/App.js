import Header from './components/Header';
import Navbar from './components/Navbar';
import Form from './components/Form';
import AirlinesList from './components/AirlinesList';
import Service from './components/Service';
import SpecialService from './components/SpecialService';
import ChoiceUS from './components/ChoiceUS';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <Header />
        <Form />
      </div>
      <AirlinesList />
      <Service />
      <SpecialService />
      <ChoiceUS />
    </div>
  );
}

export default App;
