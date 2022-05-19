import { useEffect, useRef } from 'react';
import { Box, Container } from '@mui/system';
import airlinesName from '../assets/images/airlines-name.png';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';

const AirlinesList = () => {
  const image = useRef();
  const handleNext = () => {
    image.current.scrollLeft -= 200;
  };
  const handlePre = () => {
    image.current.scrollLeft += 200;
  };
 
  return (
    <Container
      sx={{
        marginTop: { xs: '80px', sm: '500px ', md: '380px', lg: '380px' },
      }}
    >
      <Button onClick={handleNext}>
        <KeyboardArrowLeft />
      </Button>
      <Button onClick={handlePre}>
        <KeyboardArrowRight />
      </Button>
      <Box className="airlines-list" ref={image} sx={{ position: 'relataive' }}>
        <img src={airlinesName} alt="airlines name" />
      </Box>
    </Container>
  );
};
export default AirlinesList;

//  sx={{
//             padding: '6px 1px 1px 1px',
//             background: '#EFE7E7',
//             position: 'absolute',
//             right: '100px',
//             bottom: '',
//           }}
