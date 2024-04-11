import {
  Box,
  Button,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box>
      <Stack
        justifyItems='center'
        alignItems='center'
        sx={{
          gap: {
            sm: "100px"
            , xs: "60px"
          }
          , paddingTop: {
            sm: '10rem'
            , xs: '10rem'
          }
        }}
      >
        <Box>
          <Typography
            color="black"
            fontWeight='bolder'
            sx={{
              fontSize: {
                xs: '30px'
                , sm: '3.5rem'
              }
              , paddingX: {
                sm: '2rem'
              }
            }}
          >
            HEY, I'M UTSAV KC
          </Typography>
        </Box>
        <Box maxWidth='1200px'>
          <Typography
            color="#333"
            variant='h5'
            sx={{
              textAlign: 'center'
              , paddingX: {
                sm: '2rem'
              }
              , fontSize: {
                xs: '20px'
                , sm: '28px'
              }
            }}
          >
            A design-minded
            software engineer focused on building
            beautiful and user-oriented interfaces
            & experiences
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          gap="20px"
        >
          <Button
            className='button'
            sx={{
              paddingX: '6rem'
              , paddingY: '1rem'
              , zIndex: '-1'
              , backgroundColor: 'darkGray'
              , color: 'white'
            }}
          >
            Contact me
          </Button>
        </Stack>
      </Stack>
    </Box >
  );
};

export default About;
