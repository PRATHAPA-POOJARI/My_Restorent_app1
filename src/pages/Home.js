import React from 'react';
import Layout from '../components/Layout/Layout'; // Corrected import path
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className='home'>
        <div className='headerContainer'>
          <h1>Food website</h1>
          <p>Best Food in India</p>
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
