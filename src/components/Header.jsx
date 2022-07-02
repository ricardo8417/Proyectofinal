import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import '../css/index.css';
import image from '../img/logo2.jpeg';
import {Button } from '@mui/material';




const Header = () =>{
  

return(
<div className="header">
    <div className="login">
<Button variant="contained" color='secondary' size="small"  >  <Link to="/Login">Login </Link></Button></div>
<nav>
<ul>
<img src= {image} className="logo" alt='Imagen'/>
<li><Link to="/"> Inicio </Link></li>
<li><Link to="/carta"> Carta </Link></li>
<li><Link to="/pedidos"> Pedidos </Link></li>
<li><Link to="/contacto"> Contacto </Link></li>
</ul>
</nav>

<Outlet />
</div>


);

}

export default Header;