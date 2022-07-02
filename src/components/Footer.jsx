import React from "react";
import '../css/footer.css';

const Footer = () =>{
    const[color]= React.useState('black');

return(

<div style={{backgroundColor:color}} className="footer">
<p>©Creado por Ricardo Navarrete | Diseñador Web | Derechos Reservados.</p>


</div>


);

}
export default Footer;