import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

const images = [c1, c2, c3, c4, c5, c1, c2, c3, c4, c5, c1, c2, c3, c4, c5];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        marginRight: '20px',
      }}
      onClick={onClick}
    />
  );
}

const AirlinesList = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container
      component="div"
      maxWidth="xl"
      sx={{
        textAlign: 'center',
        marginTop: { xs: '100px', md: '400px', lg: '300px', xl: '160px' },
        width: { xs: '88%' },
      }}
    >
      <Typography
        component="h1"
        sx={{ fontSize: '17px', fontWeight: 'bold', color: '#003566', py: 2 }}
      >
        Our Most Popular Airlinr Partners
      </Typography>
      <Slider {...settings}>
        {images.map((data, index) => {
          return (
            <Box component="div" className="carousel-div">
              <Box
                component="img"
                key={index}
                src={data}
                alt="company logo"
                className="carousel-img"
              />
            </Box>
          );
        })}
      </Slider>
    </Container>
  );
};
export default AirlinesList;
