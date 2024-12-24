import { LocalLibrary, Home, Computer, ImportContacts, WorkHistory } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

const StyledToolbar = styled(Toolbar) ({
  display:"sticky",
  justifyContent:"space-between",
});


const Icons = styled(Box) (({ theme }) => ({
  display: "none",
  gap: "30px", // Increased space between icons
  alignItems: "center",
  justifyContent: "flex-end", // Aligns icons to the right
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));


const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <StyledToolbar>
        <Typography variant='h2' sx={{display:{xs:"none", sm:"block"}}}>
          {/* Keep this section if you want text */}
        </Typography>
        <Icons>
          <Home sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          <Computer sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          <CreateNewFolder sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          <ImportContacts sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          <WorkHistory sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
        </Icons>
        <LocalLibrary sx={{display:{xs:"block", sm:"none"}}}/>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;
