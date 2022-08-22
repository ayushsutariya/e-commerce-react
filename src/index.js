import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { all_Reducers } from './Containers/Reducers';
import rootSaga from './Containers/Common/rootSaga';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const store = createStore(all_Reducers, applyMiddleware(...middleware));
root.render(
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode> 
      </BrowserRouter>
);


// return { store, persistor }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
