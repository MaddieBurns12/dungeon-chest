import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
   <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// const http = require("http");
// const app = require("./app");
// const server = http.createServer(app);

// const { API_PORT } = process.env;
// const port = process.env.PORT || API_PORT;

// // server listening 
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });