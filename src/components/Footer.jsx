/* eslint-disable */
import { AppBar, Box, IconButton, Toolbar, Typography, styled } from '@mui/material'
import { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';

const StyledToolbar = styled(Toolbar) ({
  display:"sticky",
  justifyContent:"space-between",
});

const Searchbar = styled("div") (({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box) (({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));

const UserBox = styled(Box) (({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "pink"}}>
    <StyledToolbar>
    <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/victorialooby')}>Find me on LinkedIn
    <LinkedIn fontSize="large" />
    </IconButton>
    <IconButton aria-label="Email" onClick={() => window.open('mailto:victoria.looby@hotmail.co.uk')}>Email Me
    <EmailIcon fontSize="large" />
    </IconButton>
    <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
    </Typography>
    </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
