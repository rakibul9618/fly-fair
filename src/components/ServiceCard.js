import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ServiceCard = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 275 },
        margin: '20px 10px',
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.img}
          alt="green iguana"
          sx={{ width: '100%' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textAlign: 'center',
              fontSize: '24',
            }}
          >
            {data.header}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              fontSize: '16',
            }}
          >
            {data.para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
