import { Box, Button, Stack, Typography } from '@mui/material'; import React from 'react';

const Intro = () => {
  return (
    <Box>
      <Stack justifyItems='center' alignItems='center' sx={{ gap: { sm: "70px", xs: "60px" }, paddingTop: { sm: '10rem', xs: '10rem' } }}>
        <Box>
          <Typography color="black" fontWeight='300' sx={{ fontSize: { xs: '30px', sm: '40px' }, textAlign: { sm: 'center' } }}>
            Hey, I'm Utsav
          </Typography>
        </Box>
        <Box maxWidth='1200px'>
          <Typography color="#333" variant='h5' sx={{ textAlign: 'center', paddingX: { sm: '10rem' }, fontSize: { xs: '10px', sm: '22px' }, lineHeight: 1.6 }}>
            Crafting seamless digital experiences with a blend of creativity and technical expertise, bringing ideas to life through elegant and functional design.
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" gap="20px">
          <Button className='button' sx={{ paddingX: '6rem', paddingY: '1rem', zIndex: '-1', backgroundColor: 'darkGray', color: 'white' }}>Contact me</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Intro;