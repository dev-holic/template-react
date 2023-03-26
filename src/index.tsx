import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './GlobalStyle';

const container = document.getElementById('root');
if (!container) {
  throw new Error('not found container.');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
