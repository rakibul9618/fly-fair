import React from 'react';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ShowInput from './ShowInput';

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
    logo: '',
  },
  {
    header: 'Returning Date',
    placeholder: 'Departure Date',
    logo: '',
  },
  {
    header: 'Passenger & Class',
    placeholder: '1 Person <br /> Economy Class ',
  },
];

const Form = () => {
  return (
    <Container>
      <Box
        component="span"
        sx={{
          background: '#003566',
          px: 2,
          py: 1.5,
          color: 'white',
          borderRadius: '124.5px',
        }}
      >
        <Button variant="text" sx={{ color: 'white', mx: 9 }}>
          One Way
        </Button>
        <MidButton variant="contained">Round trip</MidButton>
        <Button variant="text" sx={{ color: 'white', mx: 9 }}>
          Multi-City
        </Button>
      </Box>
      <Box component="span" sx={{ p: 2, display: 'flex', flexWrap: 'wrap' }}>
        {formData.map((data, index) => {
          return <ShowInput data={data} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default Form;
