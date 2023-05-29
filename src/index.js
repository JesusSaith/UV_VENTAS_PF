import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const cors = require ('cors')
const express = require ('express')
const {kafka} = require ('kafkajs')

const kafka = new kafka({
  clientId: 'my app',
  brokers: [
    'my-kafka-0.my-kafka-headless.jesussaith.svc.cluster.local:9092'
  ]
  

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
