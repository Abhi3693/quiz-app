import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route } from 'react-router-dom';
import App from './components/App';
import './style/index.css';
const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
