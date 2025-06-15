import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user.context';
=======
import './index.css';
import App from './App';
>>>>>>> 323bc4b2 (Fixing merge conflict)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
=======
    <App />
>>>>>>> 323bc4b2 (Fixing merge conflict)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
