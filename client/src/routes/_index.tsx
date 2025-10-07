import React from 'react';
import { Link } from 'react-router';

const Main = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Main Page - Proof of Concept</h1>
      <p>This is the main page of the React Router v7 proof of concept.</p>
      <Link to="/page-a" style={{ 
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        Go to Page A
      </Link>
    </div>
  );
};

export default Main;
