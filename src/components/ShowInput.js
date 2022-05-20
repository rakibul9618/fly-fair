import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const ShowInput = ({ data }) => {
  return (
    <Box
      component="div"
      sx={{
        padding: { xs: '5px 15px 5px 0px', xl: '5px 10px' },
        width: { sm: '46%', lg: '30%', xl: '18%' },
      }}
    >
      <Typography
        component="h4"
        sx={{ py: 1, color: '#003566', fontSize: '17px' }}
      >
        {data.header}
      </Typography>
      <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
        {data.logo && data.logo}
        <Typography sx={{ py: 1, color: '#9E9E9E', fontSize: '13px' }}>
          {data.placeholder}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ width: '100%', border: '1px solid #003566' }}
      ></Box>
    </Box>
  );
};
export default ShowInput;
