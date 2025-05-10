import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const About = () => {
  return (
    <Box sx={{ marginTop: { sm: '200px', xs: '100px' } }}>
      <Stack
        gap="100px"
        direction="column"
        sx={{
          flexWrap: {
            xs: 'wrap',
            sm: 'nowrap'
          }
        }}
      >
        <Typography
          color="black" fontWeight="300"
          sx={{
            fontSize: { xs: '30px', sm: '40px' },
            textAlign: {
              sm: 'center',
              xs: 'left'
            }
          }}
        >
          About
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="flex-start"
          sx={{
            flexWrap: {
              md: 'nowrap',
              xs: 'wrap'
            },
            justifyContent: {
              xs: 'center',
              md: 'space-between'
            }
          }}
        >
          {/* About Me Section */}
          <Stack
            flexGrow={1}
            sx={{
              gap: {
                xs: 3,
                md: '50px'
              },
              paddingLeft: {
                xs: '2rem',
                sm: '34rem'
              },
              paddingRight: {
                xs: '2rem',
                sm: '24rem'
              },
              textAlign: {
                xs: 'left',
                sm: 'left'
              }
            }}
          >
            <Typography
              variant="h4"
              color="black" fontWeight="300"
              sx={{
                fontSize: { xs: '30px', sm: '18px' },
              }}
            >
              I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            </Typography>
            <Typography color="black" fontWeight="300"
              sx={{
                fontSize: { xs: '30px', sm: '18px' },
              }}>
              I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
            </Typography >
            <Typography color="black" fontWeight="300"
              sx={{
                fontSize: { xs: '30px', sm: '18px' },
              }}>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box >
  );
};

export default About;
