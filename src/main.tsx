import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
//import reportWebVitas from './reportWebVitals' não tava na aula e apareceu.

import { ContextProvider } from './contexts/Context.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);

//import { BrowserRouter } from 'react-router-dom'; estava na aula e foi tirado.
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); tava na aula
*/