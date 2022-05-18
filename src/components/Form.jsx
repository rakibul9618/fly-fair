import React from 'react';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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

const FormTag = styled('form')({
  display: 'flex',
});

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
      <Box component="span" sx={{ p: 2, display: 'flex' }}>
        <FormTag onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="fromId">Form</label>
            <input
              type="text"
              name="from"
              id="fromId"
              placeholder="Enter city / airport name"
            />
          </div>
          <div>
            <label htmlFor="fromId">To</label>
            <input
              type="text"
              name="to"
              id="toId"
              placeholder="Enter city/airport name"
            />
          </div>
          <div>
            <label htmlFor="departureDateId">Departure Date</label>
            <input
              type="date"
              id="departureDateId"
              name="departureDate"
              placeholder="Departure Date"
            />
          </div>
          <div>
            <label htmlFor="returningDate">Returning Date:</label>
            <input
              type="date"
              id="returningDateId"
              name="returningDate"
              placeholder="Returning Date"
            />
          </div>
          <div>
            <label htmlFor="passengerAndClassId">Passenger & Class</label>
            <input
              type="text"
              name="passengerAndClass"
              id="passengerAndClassId"
              placeholder="1 Person Economy Class"
            />
          </div>
        </FormTag>
      </Box>
    </Container>
  );
};

export default Form;
