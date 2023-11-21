import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#111',
    accent: '#02d9c5',
    background: '#1c1c1c',
    backgroundSecondary: '#435585',
    cardBg: '#232d3f',
    linkBg: '#3c4042',
    linkBgActive: '#1f4d64',
  },
  transition: {},
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
