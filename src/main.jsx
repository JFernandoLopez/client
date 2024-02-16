import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './redux/store.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading...</div>}>
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    </Suspense>
)
