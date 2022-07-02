import React from 'react';
import Header from './Header';
import Carrusel from './Carrusel';
import Content from './Content';
import Publicidad from './Publicidad';
import Footer from './Footer';


const App = () => {
   return (
      <div className='header'>
      <Header/>
      <Carrusel />
      <Content />
      <Publicidad />
      <Footer/>
    </div>
   );
};

export default App;
