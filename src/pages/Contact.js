import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box,Typography, TableContainer,Paper,Table,TableHead, TableRow, TableCell,TableBody} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10,marginLeft:10 ,"&h4":{fontWeight:'bold',marginBottom:2}}}>
          <Typography variant="h4" >
              Contact my Restorent
          </Typography>
             <p> A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
        </p>
        </Box>
        <Box sx={{margin:5,width:"600px",marginLeft:10,"@media (max-width:600px)":{width:"300px"}}}>
          <TableContainer component={Paper}>
            <Table arial-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{backgroundColor:'black',color:'white'}} align="center">Contact Details</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon  sx={{color:"red",paddingTop:1}}/> 8495069491
                    </TableCell>
                   
                    
                  </TableRow>
                  <TableRow>
                  <TableCell>
                    <MailIcon  sx={{color:"skyblue",paddingTop:1}}/>prathappoojari607@gmail.com
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>
                    <CallIcon  sx={{color:"green",paddingTop:1}}/>7022465958
                    </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
          </TableContainer>
        </Box>
             </Layout>
  )
}

export default Contact