import {
  Box,
  CardMedia,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';

const Background = () => {

  const fontSx = {
    fontSize: {
      xs: '20px'
      , sm: '25px'
    }
    , color: 'black'
  }
  return (
    < Box sx={{ marginTop: { sm: '200px', xs: '100px' } }
    }>
      <Stack
        gap="100px"
        direction="column"
        sx={{
          flexWrap: {
            xs: 'wrap',
            sm: 'nowrap'
          },
          gap: {
            sm: '100px',
            xs: '50px'
          }
        }}
      >
        <>
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
            ABOUT ME
          </Typography>
        </>
        <>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              flexWrap: {
                md: 'nowrap',
                xs: 'wrap'
              },
              justifyContent: {
                xs: 'center',
                md: 'auto'
              },
              gap: {
                md: '100px',
                xs: '80px'
              }
            }}
          >
            <Stack
              sx={{
                textAlign: 'left',
                gap: {
                  xs: 3,
                  md: '40px'
                }
                , paddingX: {
                  sm: '4.8rem'
                }
              }}
            >
              <Typography variant='h5' sx={fontSx}>
                I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              </Typography>
              <Typography variant='h5' color='black' sx={fontSx}>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
              </Typography >
              <Typography variant='h5' color='black' sx={fontSx}>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </Typography>
            </Stack>
          </Stack>
        </>
      </Stack>
    </Box >
  )
};

export default Background;
