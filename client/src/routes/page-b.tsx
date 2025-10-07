import React from 'react';
import { Link } from 'react-router';

const PageB = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Page B</h1>
      <p>You've reached the final page of the proof of concept!</p>
      <p>Lazy route discovery is working - each page is loaded only when navigated to.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/page-a" style={{ 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginRight: '10px'
        }}>
          Back to Page A
        </Link>
        <Link to="/" style={{ 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          Back to Main
        </Link>
      </div>
    </div>
  );
};

export default PageB;
