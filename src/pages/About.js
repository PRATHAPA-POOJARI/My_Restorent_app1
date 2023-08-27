import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box,Typography} from '@mui/material';

const About = () => {
  return (
    <Layout>
       <Box sx={{my:15,
      textAlign:"center ",
      p:2,
       "& h4":{fontWeight:"bold",my:2,
      fontSize :"2rem"},
       "&p":{textAlign:"justify"},
       "@media (max-width:600px)":{
        mt:0, 
        "& h4":{fontSize: "1.5 rem",
       },
        }}}>
         <Typography variant="h4" >
          welcome to my restorent
          </Typography>
          <p> restaurant, Establishment where refreshments or meals are served to paying guests. Though inns and taverns served simple fare to travelers for centuries, the first modern restaurant where guests could order from a varied menu is thought to have belonged to A. Boulanger, a soup vendor who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to his soups and broths. By 1804 Paris had more than 500 restaurants, and France soon became internationally famous for its cuisine. Other European restaurants include the Italian trattorie, taverns featuring local specialties; the German Weinstuben, informal restaurants with a large wine selection; the Spanish tapas bars, which serve a wide variety of appetizers; and the public houses of England. Asian restaurants include the Japanese sushi bars and teahouses serving formal Kaiseki cuisine as well as the noodle shops of China. Most U.S. restaurant innovations have revolved around speed. The cafeteria originated in San Francisco during the 1849 gold rush; cafeterias feature self-service and offer a variety of foods displayed on counters. The U.S. also pioneered fast-food restaurants such as White Castle (founded 1921) and McDonald’s (see Ray Kroc), usually operated as chains and offering limited menus.</p>
       <br/>
       <p>restaurant, Establishment where refreshments or meals are served to paying guests. Though inns and taverns served simple fare to travelers for centuries, the first modern restaurant where guests could order from a varied menu is thought to have belonged to A. Boulanger, a soup vendor who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to his soups and broths. By 1804 Paris had more than 500 restaurants, and France soon became internationally famous for its cuisine. Other European restaurants include the Italian trattorie, taverns featuring local specialties; the German Weinstuben, informal restaurants with a large wine selection; the Spanish tapas bars, which serve a wide variety of appetizers; and the public houses of England. Asian restaurants include the Japanese sushi bars and teahouses serving formal Kaiseki cuisine as well as the noodle shops of China. Most U.S. restaurant innovations have revolved around speed. The cafeteria originated in San Francisco during the 1849 gold rush; cafeterias feature self-service and offer a variety of foods displayed on counters. The U.S. also pioneered fast-food restaurants such as White Castle (founded 1921) and McDonald’s (see Ray Kroc), usually operated as chains and offering limited menus.</p>
        </Box>

    </Layout>
  )
}

export default About