import React from 'react';
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';

// images
import ticketImg from '../assets/images/ticketImg.png';

const GetTicket = styled(Button)({
  background: '#003566',
  color: 'white',
  fontWeight: '600',
  fontSize: '15px',
  padding: '10px 35px',
  '&:hover': {
    backgroundColor: '#198754',
    color: 'white',
  },
});

const SpecialService = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ my: 8, display: 'flex', flexWrap: { xs: 'wrap', lg: 'nowrap' } }}
    >
      <Box
        sx={{
          paddingRight: '20px',
          my: 8,
          textAlign: { xs: 'center', lg: 'start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', lg: 'start' },
          }}
        >
          <dir
            style={{ height: '0px', width: '26px', border: '1px solid black' }}
          ></dir>
          <Typography sx={{ fontSize: '15px', paddingLeft: '8px' }}>
            Our Special Service
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '45px' }}>
          Buy Air Ticket With{' '}
          <span style={{ fontWeight: 'bold' }}>Lowest Price.</span>
        </Typography>
        <Typography sx={{ py: 5 }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Typography>
        <GetTicket variant="contained">Get My Ticket Now</GetTicket>
      </Box>
      <img src={ticketImg} alt="a desktop" width="100%" />
    </Container>
  );
};

export default SpecialService;
