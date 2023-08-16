import React from 'react'
import { Box, Typography,AppBar ,Toolbar } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
const Header = () => {
  return (
    <>
       <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
          <Typography color={'goldenrod'} variant="h6" component={'div'}>  <FastfoodIcon/> My Restorent App
          </Typography>
              
          
          </Toolbar>
        </AppBar>
        </Box> 
    </>
  )
}

export default Header