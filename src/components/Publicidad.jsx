import React from 'react';
import '../css/publicidad.css';

const Publicidad = () =>{
    return(
<div className="publicidad">

<h2>Imagenes al Interior del Restaurante</h2>


<div className="img-restaurant">

<div className="img1">
<img src={require ('../img/img6.jpg')} alt="" />
<p>Sección Planta Baja</p>
</div>
<div className="img2">
<img src={require('../img/img7.jpg')} alt="" />
<p>Bar Tender</p>
</div>

<div className="img3">
<img src={require('../img/img8.jpg')} alt="" />
<p>Planta Baja Sección B</p>
</div>

<div className="img4">
<img src={require('../img/img9.jpg')} alt="" />
<p>Segundo Nivel Terraza</p>
</div>

<div className="img5">
<img src={require('../img/img10.jpg')} alt="" />
<p>Bar Tender Segundo Nivel</p>
</div>

<div className="img6">
<img src={require('../img/img11.jpg')} alt="" />
<p>Sección de Eventos</p>
</div>


</div>
</div>
    );
    }
    export default Publicidad;