import { LocalLibrary } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
// import CreateNewFolder from '@mui/icons-material/CreateNewFolder';
// import Link from '@mui/joy/Link';
// import {Home, Computer, ImportContacts, WorkHistory, Phone } from '@mui/icons-material';
// import {Box , Tooltip } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: "sticky",
  justifyContent: "space-between",
});

// const Icons = styled(Box)(({ theme }) => ({
//   display: "none",
//   gap: "30px", // Increased space between icons
//   alignItems: "center",
//   justifyContent: "flex-end", // Aligns icons to the right
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//   },
// }));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <StyledToolbar>
        <Typography variant='h2' sx={{ display: { xs: "none", sm: "block" } }}>
        </Typography>

        {/* <Icons>

          <Tooltip title="Home" arrow>
          <Link>
            <a href="#home" style={{ textDecoration: 'none' }}></a></Link>
            <Home sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          </Tooltip>

          <Tooltip title="Development Skills" arrow>
            <Computer sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          </Tooltip>

          <Tooltip title="Bootcamp Projects" arrow>
            <CreateNewFolder sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          </Tooltip>

          <Tooltip title="The Little Library Project" arrow>
            <ImportContacts sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          </Tooltip>

          <Tooltip title="Experience & Education" arrow>
            <WorkHistory sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          </Tooltip>

          <Tooltip title="Contact Me" arrow>
            <Phone sx={{ backgroundColor: "pink", borderRadius: '50%', padding: '8px' }} />
          </Tooltip>

        </Icons> */}

        <LocalLibrary sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
