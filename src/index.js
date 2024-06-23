import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import AppClass from './AppClass';
import AppArrow from './AppArrow';
import Greetings from './Greetings/Greetings';
import Counter from './Counter/Counter';
import LoginForm from './LoginForm/LoginForm';
import SecretMessage from './SecretMessage/SecretMessage';
import Lifecycle from './Lifecycle/Lifecycle';
import Quiz from './Quiz/Quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <App2 /
    <AppArrow /> */}

    {/* <AppClass /> */}
    {/* <Greetings name="Bartosz" age="40" />
    <Greetings name="Jan" /> */}
    {/* <Counter /> */}
    {/* <LoginForm /> */}
    {/* <SecretMessage /> */}
    {/* <Lifecycle /> */}
    <Quiz />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
