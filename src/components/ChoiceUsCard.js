import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// min-width: 200px;
// min-height: 198px;

const ChoiceUsCard = ({ data }) => {
  return (
    <Card
      sx={{
        minWidth: data.minWidth,
        minHeight: data.minHeight,
        maxWidth: data.maxWidth,
        maxHeight: data.maxHeight,
        background: data.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderRadius: '30px',
        p: { xs: 2, sm: 1, lg: 2, xl: 4 },
        m: { xs: 3, md: 1, lg: 3 },
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          component="h5"
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
