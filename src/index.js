import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Header from './Header';
import About from './About';
import Carusel from './Carusel';
import Help from './Help';
import Donat from './Donat';
import Footer from './Footer';
import "./responsive.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='site'>
    <Header />
    <About />
    <Carusel />
    <Help />
    <Donat />
    <Footer />
  </div>

);

