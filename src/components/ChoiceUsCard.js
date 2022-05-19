import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ChoiceUsCard = ({ data }) => {
  return (
    <Card
      sx={{
        width: data.maxWidth,
        height: data.maxHeight,
        background: data.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderRadius: '30px',
        m: 3,
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: data.color, fontSize: '28px', fontWeight: 'bold' }}
        >
          {data.header}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            color: data.color,
            fontSize: '21px',
            fontWeight: 'bold',
            marginTop: '20px',
          }}
        >
          {data.para}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChoiceUsCard;
