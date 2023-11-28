import { useState } from 'react'
import './App.css'
import icono from './assets/img/chicken.png'

import Layout from './layout.jsx';

function App() {
  return (
    <Layout>
      <h1>¡BIENVENIDO AL JUEGO POLLOBURBUJA!</h1>
      <img id='pollo' src={icono} alt="icono"/>
    </Layout>
  );
}

export default App;
