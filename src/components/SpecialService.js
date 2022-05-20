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
      sx={{
        display: 'flex',
        flexWrap: { xs: 'wrap', lg: 'nowrap' },
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center',
      }}
    >
      <Box
        component="div"
        sx={{
          width: { xs: '100%', md: '48%' },
          px: '20px',
          marginBottom: 8,
          textAlign: { xs: 'center', md: 'start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'start' },
          }}
        >
          <Box
            component="div"
            sx={{
              height: '0px',
              width: '26px',
              border: '1px solid black',
              background: 'black',
            }}
          ></Box>
          <Typography sx={{ fontSize: '15px', paddingLeft: '8px' }}>
            Our Special Service
          </Typography>
        </Box>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '22px', sm: '26px', md: '30px', lg: '40px' },
            py: 2,
          }}
        >
          Buy Air Ticket With{' '}
          <span style={{ fontWeight: 'bold' }}>Lowest Price.</span>
        </Typography>
        <Typography sx={{ paddingBottom: '30px' }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Typography>
        <GetTicket variant="contained">Get My Ticket Now</GetTicket>
      </Box>
      <Box
        component="img"
        src={ticketImg}
        alt="a desktop"
        sx={{ width: { xs: '90%', sm: '70%', md: '47%' } }}
      />
    </Container>
  );
};

export default SpecialService;
