import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TextArea from './components/textArea';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store ={store}>
        <TextArea />
      </Provider>
  </React.StrictMode>,
)
