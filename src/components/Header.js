import React from 'react';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// images
import headerImage from '../assets/images/header-image.png';
import { Typography } from '@mui/material';

const RegButton = styled(Button)({
  background: '#FFFF00',
  color: 'black',

  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#198754',
    color: 'white',
  },
});

const Header = () => {
  return (
    <Container component="div">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'start' },
          alignItems: 'center',
          borderRadius: '16px',
          textAlign: { xs: 'center', md: 'start' },
          marginTop: { xs: '10px', xl: '20px' },
          backgroundImage: `url(${headerImage})`,
          backgroundSize: { xs: 'cover', xl: 'contain' },
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: { xs: '400px', md: '677px' },
        }}
      >
        <Box
          component="div"
          sx={{
            p: 2,
            color: 'white',
            width: { xs: '100%', md: '50%', lg: '40%', xl: '50%' },
          }}
        >
          <Typography
            Container="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '20px', sm: '30px', md: '40px' },
            }}
          >
            One Platform, All Travel Solutions.
          </Typography>
          <Typography
            Container="p"
            sx={{
              py: 2,
              px: { xs: 2, sm: 4, md: 0 },
              fontSize: { xs: '12px', sm: '15px' },
            }}
          >
            Bangladesh’s most comprehensive B2B portal for You. In publishing
            and graphic design, Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on.
          </Typography>
          <RegButton
            sx={{
              fontSize: { xs: '12px', sm: '16px', md: '20px' },
              px: { xs: 2, sm: 3 },
            }}
          >
            Register now as a Agent
          </RegButton>
        </Box>
      </Container>
    </Container>
  );
};

export default Header;
