import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import ServiceCard from './ServiceCard';

// images
import visa from '../assets/images/visa.png';
import travel from '../assets/images/travel.png';
import air from '../assets/images/air.png';
import covid from '../assets/images/covid.png';

const serviceData = [
  {
    img: visa,
    header: 'Visa Processing ',
    para: 'When your visa is approved, the interviewing officer will skeep your passport and documents for a. ',
  },
  {
    img: travel,
    header: 'Travell Assistancy ',
    para: 'When your visa is approved, the interviewing officer will skeep your passport and documents for a.',
  },
  {
    img: air,
    header: 'Air Ticket ',
    para: 'When your visa is approved, the interviewing officer will skeep your passport and documents for a.',
  },
  {
    img: covid,
    header: 'Covid Test ',
    para: 'When your visa is approved, the interviewing officer will skeep your passport and documents for a.',
  },
];

const Service = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 8 }}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <dir
            style={{ height: '0px', width: '26px', border: '1px solid black' }}
          ></dir>
          <Typography sx={{ fontSize: '15px', paddingLeft: '8px' }}>
            Our Service
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '45px', textAlign: 'center' }}>
          What We Are Offering?
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '60px',
        }}
      >
        {serviceData.map((data, index) => {
          return <ServiceCard key={index} data={data} />;
        })}
      </Box>
    </Container>
  );
};

export default Service;
