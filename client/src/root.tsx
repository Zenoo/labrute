import React from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

const Root = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>React Router v7 POC</title>
      </head>
      <body>
        <div style={{
          backgroundColor: '#282c34',
          padding: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2>React Router v7 - File-Based Routing POC</h2>
          <p style={{ fontSize: '14px', margin: '5px 0 0 0' }}>
            Lazy route discovery enabled ✓
          </p>
        </div>
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default Root;
