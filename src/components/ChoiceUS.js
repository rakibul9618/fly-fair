import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import ChoiceUsCard from './ChoiceUsCard';
import styled from '@emotion/styled';

const choiceUsData = [
  {
    header: '120+ Agent',
    para: 'Permanent',
    background: '#BEE2FB',
    color: ' #5591BB',
    maxWidth: '212px',
    maxHeight: '183px',
  },
  {
    header: '10,250+',
    para: 'Customers',
    background: '#E6F9F1',
    color: ' #4CD4AB',
    maxWidth: '298px',
    maxHeight: '246px',
  },
  {
    header: '60k+',
    para: 'Direct contracts',
    background: '#F2F2FF',
    color: ' #878CFF',
    maxWidth: '298px',
    maxHeight: '246px',
  },
  {
    header: '120+ Agent',
    para: 'Permanent',
    background: '#F4F8FE',
    color: ' #81B3FF',
    maxWidth: '212px',
    maxHeight: '183px',
  },
];

const ExploreMe = styled(Button)({
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

const ChoiceUS = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        my: 8,
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '100%', md: '80%', lg: '54%' },
          flexWrap: 'wrap',
        }}
      >
        {choiceUsData.map((data, index) => {
          return <ChoiceUsCard data={data} key={index} />;
        })}
      </Box>
      <Box
        sx={{
          width: { xs: '100%', lg: '44%' },
          paddingLeft: '20px',
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
            fontSize: { xs: '22px', sm: '26px', md: '45px' },
            py: 2,
          }}
        >
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
        <ExploreMe variant="contained">Get My Ticket Now</ExploreMe>
      </Box>
    </Container>
  );
};

export default ChoiceUS;
