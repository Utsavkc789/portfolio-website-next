import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useRef, useCallback } from 'react';

const Work = () => {
  const fontSx = {
    fontSize: {
      xs: '20px'
      , sm: '25px'
    }
    , color: 'black'
  }

  return (
    <Stack
      justifyContent='center'
      sx={{
        gap: {
          sm: '100px',
          xs: '50px'
        }
      }}>
      <Typography
        variant="h4"
        color="black"
        fontWeight='bolder'
        sx={{
          fontSize: {
            xs: '25px'
            , sm: '40px'
          }
          , textAlign: {
            sm: 'center'
            , xs: 'left'
          }
        }}
      >
        EXPERIENCE
      </Typography>
      <Typography
        variant='h5'
        color='black'
        sx={fontSx}
      >
        I have had two internship experiences so far and these have been related to frontend development. You can learn more about each experience by clicking on the "Learn More" button.
      </Typography>

    </Stack>
  );
};

export default Work;
