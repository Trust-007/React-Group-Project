import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Layout from './components/layout/Layout';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </BrowserRouter>,
);
