import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import allStore from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={allStore.store}>
      <PersistGate loading={null} persistor={allStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
