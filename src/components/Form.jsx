import React from 'react';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ShowInput from './ShowInput';

// images
import calendar from '../assets/images/calendar.png';
import transfer from '../assets/images/transfer.png';

const MidButton = styled(Button)({
  background: '#FFFF00',
  color: 'black',
  fontWeight: '600',
  fontSize: '15px',
  borderRadius: '124.5px',
  padding: '5px 35px',
  '&:hover': {
    backgroundColor: '#198754',
    color: 'white',
  },
});

const formData = [
  {
    header: 'From',
    placeholder: 'Enter city/airport name',
  },
  {
    header: 'To',
    placeholder: 'Enter city/airport name',
  },
  {
    header: 'Departure Date',
    placeholder: 'Departure Date',
    logo: (
      <img
        style={{ paddingRight: '10px' }}
        src={calendar}
        alt="calender logo"
      />
    ),
  },
  {
    header: 'Returning Date',
    placeholder: 'Departure Date',
    logo: (
      <img
        style={{ paddingRight: '10px' }}
        src={calendar}
        alt="calender logo"
      />
    ),
  },
  {
    header: 'Passenger & Class',
    placeholder: '1 Person Economy Class',
  },
];

const Form = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          width: { md: '95%', lg: '80%' },
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
          py: 2,
        }}
      >
        <Box
          component="span"
          sx={{
            width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
            background: '#003566',
            px: 2,
            py: 1.5,
            color: 'white',
            borderRadius: { xs: '8px', sm: '124.5px' },
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Button variant="text" sx={{ color: 'white', px: { sm: 4, md: 9 } }}>
            One Way
          </Button>
          <MidButton variant="contained">Round trip</MidButton>
          <Button variant="text" sx={{ color: 'white', px: { sm: 4, md: 9 } }}>
            Multi-City
          </Button>
        </Box>
        <Box
          component="span"
          sx={{
            p: 2,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { sm: 'space-between', md: 'center' },
            alignItems: 'center',
          }}
        >
          {formData.map((data, index) => {
            return <ShowInput data={data} key={index} />;
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Form;
