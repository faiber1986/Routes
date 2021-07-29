import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UsuarioProvider } from './context/UserContext';

ReactDOM.render(
  <UsuarioProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UsuarioProvider>,
  document.getElementById('root')
);

