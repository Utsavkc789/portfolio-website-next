import { Box, Button, CardMedia, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import MaterialUISwitch from "./...components/MuiSwitch";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const buttonFontSize = {
  fontSize: {
    xs: "10px",
    sm: "14px",
  }
  , fontFamily: 'Open Sans, sans-serif'
  , color: 'black'
  , fontWeight: 'bolder'
};


const NavLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        alignItems="center"
        gap={5}
        sx={{
          flexWrap: {
            xs: "nowrap",
            sm: "nowrap",
          },
          justifyContent: 'space-between'
        }}
      >
        <Stack direction='row' gap='1rem' alignItems='center'>
          <CardMedia
            sx={{
              height: '3rem',
              width: '3rem',
              borderRadius: '10px'
            }}
            image="/images/profile.jpg"
          />
          <Typography color='black' fontFamily='Open Sans, sans-serif'>
            UTSAV KC
          </Typography>
        </Stack>
        {
          !isMobile ? (
            <Stack direction='row' sx={{ fontFamily: 'Open Sans, sans-serif' }}>
              <Button sx={buttonFontSize}>Home</Button>
              <Button sx={buttonFontSize}>Skill</Button>
              <Button sx={buttonFontSize}>Experience</Button>
              <Button sx={buttonFontSize}>Projects</Button>
              <Button sx={buttonFontSize}>Contact</Button>
              <FormGroup>
                <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
              </FormGroup>
            </Stack>
          )
            : (
              <>
                <Button
                  id="basic-button"
                  onClick={handleClick}
                >
                  <MenuOutlinedIcon fontSize="large" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>Skill</MenuItem>
                  <MenuItem onClick={handleClose}>Experience</MenuItem>
                  <MenuItem onClick={handleClose}>Projects</MenuItem>
                  <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Menu>
              </>
            )
        }
      </Stack>
    </Box>
  );
};

export default NavLayout;
