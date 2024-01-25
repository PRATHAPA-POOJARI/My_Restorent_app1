import React from 'react';
import Layout from '../components/Layout/Layout'; // Corrected import path
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpg';
import  "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Food website</h1>
          <p>Best Food in Manglore</p>
          <Link to="/menu">
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
