import React from 'react';
import '../css/content.css';
import image from '../img/img5.jpg';

const Content = () =>{
return(
<div className="contenido">
<div className="texto">
<h2>Quienes Somos</h2>
<p>Somos un restaurante con comida Tradicional Mexicana, el cual se encarga de llegar hasta tu mesa, con el
    con mejor sazon, contamos con una historia de servicio de 40 años, del cual nuestros clientes nos brindan confianza por 
    nuestro sazon y servicio ofrecido,
    presentandoles una gran variedad de menú, y seduciendo a los exigentes paladares.
</p>

</div>

<div className="imagen">
<img src = {image} alt='Imagen'/>

</div>




</div>

);


}
export default Content;