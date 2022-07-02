import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './components/App';
import Carta from './components/Carta';
import Pedidos from './components/Pedidos';
import Contacto from './components/Contacto';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/Carta' element={<Carta />}/>
    <Route path='/Pedidos' element={<Pedidos />}/>
    <Route path='/Contacto' element={<Contacto />}/>
    <Route path='/Login' element={<Login />}/>
        </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
