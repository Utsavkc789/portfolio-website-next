import { Box, Paper, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Inter, Dancing_Script } from 'next/font/google';
import NavLayout from '@/components/NavLayout/NavLayout';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import Work from './Work';
import Projects from './projects';
import Contact from './Contact';
import Intro from './Intro';
import About from './About';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(660));

  const stylesMobile = {
    position: 'fixed'
    , bottom: 0
    , left: 0
    , right: 0
    , height: '60px'
    , display: 'flex'
    , flexDirection: 'row'
    , alignItems: 'center'
    , justifyContent: 'center'
  }
  const stylesNotMobile = {
    height: '280px'
    , display: 'flex'
    , flexDirection: 'column'
    , width: '60px'
    , position: 'fixed'
    , top: '35%'
    , left: 0
    , alignItems: 'center'
    , justifyContent: 'center'
  }

  return (
    <Box>
      <style jsx global>{`
        html {
          font-family: ${dancingScript.style.fontFamily};
        }
      `}</style>
      <Paper
        elevation={24}
        sx={isMobile ? stylesMobile : stylesNotMobile}
      >
        <TwitterIcon fontSize='large' sx={{ flexGrow: 1 }} />
        <FacebookIcon fontSize='large' sx={{ flexGrow: 1 }} />
        <GitHubIcon fontSize='large' sx={{ flexGrow: 1 }} />
        <InsertDriveFileIcon fontSize='large' sx={{ flexGrow: 1 }} />
      </Paper>
      <Paper
        elevation={24}
        sx={{
          display: 'flex',
          paddingX: '20px'
          , height: '80px'
          , alignItems: 'center'
          , justifyContent: 'center'
          , position: 'fixed'
          , top: 0
          , left: 0
          , right: 0
        }}>
        <NavLayout />
      </Paper>
      <Stack
        paddingY="20px"
        sx={{
          paddingX: {
            sm: "60px"
            , xs: "20px"
          }
          , paddingY: {
            sm: '10rem'
            , xs: '10px'
          }
          , gap: {
            sm: "10rem"
            , xs: "5rem"
          }
        }}
      >
        <Intro />
        <About />
        <Work />
        <Projects />
        <Contact />
      </Stack>
    </Box >
  );
}
