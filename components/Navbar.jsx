'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';

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
            <div
                style={{
                    position: 'relative',
                    width: '100px',
                    height: '40px',
                    marginRight: '10px',
                }}
            >
                <Image src="/logo.png" alt="NotifHi Logo" layout="fill" />
            </div>
         </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ResponsiveNavbar;
