import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store';
import { Provider } from 'react-redux';
import Screen from './layout/screen';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store ={store}>
        <Screen />
      </Provider>
  </React.StrictMode>,
)
