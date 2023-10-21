'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

function ResponsiveNavbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar sx={{backgroundColor: 'black'}} position="static">
        <Toolbar>
         <Link href="/" style={{textDecoration: 'none', color: 'white'}}>
          <Typography class="link" variant="h6" >
            <strong>
                NotifHi
            </strong>
          </Typography>
         </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ResponsiveNavbar;
