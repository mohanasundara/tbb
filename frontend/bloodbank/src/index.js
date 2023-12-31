import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { store } from './features/Store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const persistor = persistStore(store);
 
 
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
     <Provider store={store}>
       
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider> 
       
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
