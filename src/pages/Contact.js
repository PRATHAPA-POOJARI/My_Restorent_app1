import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box,Typography, TableContainer,Paper,Table,TableHead, TableRow, TableCell} from '@mui/material';
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
        <Box>
          <TableContainer component={Paper}>

            <Table arial-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell>Contact Details</TableCell>
                  </TableRow>
              </TableHead>

              </Table>
          </TableContainer>
        </Box>
             </Layout>
  )
}

export default Contact