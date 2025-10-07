import React from 'react';
import { Link } from 'react-router';

const PageA = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Page A</h1>
      <p>You've successfully navigated to Page A using lazy route discovery!</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginRight: '10px'
        }}>
          Back to Main
        </Link>
        <Link to="/page-b" style={{ 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          Go to Page B
        </Link>
      </div>
    </div>
  );
};

export default PageA;
