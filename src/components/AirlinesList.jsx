import { Container } from '@mui/system';
import { useRef } from 'react';
import airlinesName from '../assets/images/airlines-name.png';

const AirlinesList = () => {
  const image = useRef();
    const handleNext = () => {
        image.current.scrollLeft -= 20;
  };
    const handlePre = () => {
      image.current.scrollLeft += 20;
  };
  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePre}>pre</button>
      <div className="airlines-list" ref={image}>
        <img src={airlinesName} alt="airlines name" />
      </div>
    </div>
  );
};
export default AirlinesList;
