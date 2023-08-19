import React from 'react'
import { Box, Typography,AppBar ,Toolbar,IconButton } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';

import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import "../../styles/HeaderStyle.css";
const Header = () => {
  return (
    <>
       <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton color="inherit" arial-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},}}>
              <MenuIcon/>
            </IconButton>
          <Typography color={'goldenrod'} variant="h6" component={'div'} sx={{flexGrow:1}}>  <FastfoodIcon/> My Restorent App
          </Typography>
              <Box sx={{display:{xs:'none',sm:"block"}}}>
                 <ul className='navigation-menu'>
                  <li>
                  <Link  to={'/ home'}>Home</Link>
                    </li>
                    <li>
                  <Link  to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                  <Link  to={'/ about'}>About</Link>
                    </li>
                    <li>
                  <Link  to={'/ contact'}>Contact</Link>
                    </li>
                    
                  </ul>

              </Box>
          </Toolbar>
        </AppBar>
        </Box> 
    </>
  )
}

export default Header