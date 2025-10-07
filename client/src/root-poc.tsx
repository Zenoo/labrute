import React from 'react';
import { Outlet } from 'react-router';

const RootPOC = () => {
  return (
    <div>
      <header style={{
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2>React Router v7 - File-Based Routing POC</h2>
        <p style={{ fontSize: '14px', margin: '5px 0 0 0' }}>
          Lazy route discovery enabled ✓
        </p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootPOC;
