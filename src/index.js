import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
