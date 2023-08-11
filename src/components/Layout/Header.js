import React from 'react'
import { Box, Typography,AppBar ,Toolbar } from '@mui/material'
const Header = () => {
  return (
    <>
       <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
          <Typography> My Restorent App</Typography>
              
          <Typography> My Restorent App</Typography>
          </Toolbar>
        </AppBar>
        </Box> 
    </>
  )
}

export default Header