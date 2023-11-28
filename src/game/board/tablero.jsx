import Layout from '../../layout.jsx'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import amongus from '../../assets/img/among_us.png'
import babyyoda from '../../assets/img/baby_yoda.png'
import angrybirds from '../../assets/img/angry_birds.png'
import mickeymouse from '../../assets/img/mickey_mouse.png'
import moneda from '../../assets/img/moneda.png'
import star from '../../assets/img/estrella.png'
import dado from '../../assets/img/dado.png'
import tienda from '../../assets/img/tienda.png'
import patricio from '../../assets/img/patricio.png'
import salir from '../../assets/img/salir.png'
import fuego from   '../../assets/img/fuego.png'
import gandalf from '../../assets/img/gandalf.png'
import toreto from '../../assets/img/toreto.png'
import fantasma from '../../assets/img/fantasma.png'
import Dice1 from '../../assets/img/Dice1.png'
import Dice2 from '../../assets/img/Dice2.png'
import Dice3 from '../../assets/img/Dice3.png'
import Dice4 from '../../assets/img/Dice4.png'
import Dice5 from '../../assets/img/Dice5.png'
import Dice6 from '../../assets/img/Dice6.png'
import axios from 'axios'
import './tablero.css'





function Tablero() {

  const navigate = useNavigate();


  const [datosDelTablero, setDatosDelTablero] = useState(null);

  const iniciarTemporizador = () => {
    setTimerActive(true);
    setTimer(20);
  };

  useEffect(() => {
    iniciarTemporizador();
    const obtenerDatosDelTablero = async () => {
      try {
        const response = await axios.get('http://localhost:3000/players/getplayers');
        console.log('Respuesta completa de Axios:', response);

         if (Array.isArray(response.data)) {
        //   const datosTransformados = response.data.map((jugador) => ({
        //     num_player: jugador.num_player,
        //     position: jugador.position,
        //   }));
           setDatosDelTablero(response.data); }
        // } else {
        //   console.error('Los datos del tablero no son un array:', response.data);
      } catch (error) {
        console.error('Error al obtener datos del tablero:', error);
      }
    };
  
    obtenerDatosDelTablero();
  }, []);
  

  const colores = [
    ['amarillo', 'azul', 'azul', 'rojo', 'azul', 'verde', 'rojo'],
    ['azul', 'azul', 'verde', 'azul', 'azul', 'rojo', 'rojo'],
    ['rojo', 'azul', 'azul', 'verde', 'azul', 'verde', 'azul'],
    ['amarillo', 'rojo', 'verde', 'azul', 'azul', 'rojo', 'verde'],
  ];

  const direcciones = [
    ['→', '', '', '', '', '', '↓'],
    ['↓', '', '', '', '', '', '←'],
    ['→', '', '', '', '', '', '↓'],
    ['☆', '', '', '', '', '', '←'],
  ];


  const posiciones = [
    { i: 0, j: 0 },
    { i: 0, j: 1 },
    { i: 0, j: 2 },
    { i: 0, j: 3 },
    { i: 0, j: 4 },
    { i: 0, j: 5 },
    { i: 0, j: 6 },
    { i: 1, j: 6 },
    { i: 1, j: 5 },
    { i: 1, j: 4 },
    { i: 1, j: 3 },
    { i: 1, j: 2 },
    { i: 1, j: 1 },
    { i: 1, j: 0 },
    { i: 2, j: 0 },
    { i: 2, j: 1 },
    { i: 2, j: 2 },
    { i: 2, j: 3 },
    { i: 2, j: 4 },
    { i: 2, j: 5 },
    { i: 2, j: 6 },
    { i: 3, j: 6 },
    { i: 3, j: 5 },
    { i: 3, j: 4 },
    { i: 3, j: 3 },
    { i: 3, j: 2 },
    { i: 3, j: 1 },
    { i: 3, j: 0 },

  ];

  const casillas = [];

  const [jugador1Posicion, setJugador1Posicion] = useState(posiciones[0]);
  const [jugador2Posicion, setJugador2Posicion] = useState(posiciones[0]);
  const [jugador3Posicion, setJugador3Posicion] = useState(posiciones[0]);
  const [jugador4Posicion, setJugador4Posicion] = useState(posiciones[0]);



  const jugadores = [
    { id: 'jugador-1', posicion: 'arriba-izquierda', imagen: amongus},
    { id: 'jugador-2', posicion: 'arriba-derecha', imagen: babyyoda},
    { id: 'jugador-3', posicion: 'abajo-izquierda', imagen: angrybirds},
    { id: 'jugador-4', posicion: 'abajo-derecha', imagen: mickeymouse},
  ];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      const color = colores[i][j];
      const direccion = direcciones[i][j];

      casillas.push(
        <div className={`casilla ${color}`} id={`casilla-${i}-${j}`}>
          {direccion && <span className="flecha">{direccion}</span>}
          {jugadores.map(jugador => (
            (i === jugador1Posicion.i && j === jugador1Posicion.j) &&
            <img src={jugadores[0].imagen} className={`player-icon ${jugadores[0].posicion}`} id={jugadores[0].id} alt={jugadores[0].id} />
            ))}
           {jugadores.map(jugador => (
            (i === jugador2Posicion.i && j === jugador2Posicion.j) &&
            <img src={jugadores[1].imagen} className={`player-icon ${jugadores[1].posicion}`} id={jugadores[1].id} alt={jugadores[1].id} />
            ))}
           {jugadores.map(jugador => (
            (i === jugador3Posicion.i && j === jugador3Posicion.j) &&
            <img src={jugadores[2].imagen} className={`player-icon ${jugadores[2].posicion}`} id={jugadores[2].id} alt={jugadores[2].id} />
            ))}
          {jugadores.map(jugador => (
            (i === jugador4Posicion.i && j === jugador4Posicion.j) &&
            <img src={jugadores[3].imagen} className={`player-icon ${jugadores[3].posicion}`} id={jugadores[3].id} alt={jugadores[3].id} />
            ))}
        </div>
      );
    }
  }

  var diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const [interfaz, setInterfaz] = useState('normal');
  
  const [image, setImage] = useState(diceImages[0]);

  const [dadoVisible, setDadoVisible] = useState(true);

  const [rollingDice, setRollingDice] = useState(false);

  const [timer, setTimer] = useState(20); 

  const [timerActive, setTimerActive] = useState(false); 

  const [ultimoResultadoDado, setUltimoResultadoDado] = useState(null);

  const [jugadorActual, setJugadorActual] = useState(1);

  const [dadoLanzado, setDadoLanzado] = useState(false);

  const [minijuegoActual, setMinijuegoActual] = useState(null);


  const siguienteJugador = () => {
    setJugadorActual(jugadorActual % 4 + 1);
    setTimerActive(true);
    setTimer(20);
    setDadoLanzado(false);
  };

  const handleTiendaClick = () => {
    setInterfaz('potenciadores');
  };

  const handleDadoClick = async () => {
    setRollingDice(true);
    if (!dadoLanzado) {
      setDadoLanzado(true);
       
      let randomNum;
    
      let animationTimeout = setTimeout(() => {
        let interval = setInterval(() => {
          randomNum = Math.floor(Math.random() * 6);
          setImage(diceImages[randomNum]);
        }, 100);
    
        setTimeout(async () => {
          clearInterval(interval);
          setRollingDice(false);

     

        setUltimoResultadoDado(randomNum); 

        if (jugadorActual === 1) {

          setJugador1Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            
            console.log([prevPosicion.i, prevPosicion.j]);
            if (colores[prevPosicion.i, prevPosicion.j] === 'verde') {
              const minijuegoSeleccionado = Math.random() < 0.5 ? 'flappy_bird' : 'pro_reflex';
              navigate(`${minijuegoSeleccionado}`);
            }

            return posiciones[nuevaPosicion];
          });
          
        } else if (jugadorActual === 2) {

          setJugador2Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            console.log([prevPosicion.i, prevPosicion.j]);

            if (colores[prevPosicion.i, prevPosicion.j] === 'verde') {
              const minijuegoSeleccionado = Math.random() < 0.5 ? 'flappy_bird' : 'pro_reflex';
              navigate(`${minijuegoSeleccionado}`);
            }
            return posiciones[nuevaPosicion];

          });

        } else if (jugadorActual === 3) {

          setJugador3Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            console.log([prevPosicion.i, prevPosicion.j]);


            if (colores[prevPosicion.i, prevPosicion.j] === 'verde') {
              const minijuegoSeleccionado = Math.random() < 0.5 ? 'flappy_bird' : 'pro_reflex';
              navigate(`${minijuegoSeleccionado}`);
            }

            return posiciones[nuevaPosicion];
          });
        } else if (jugadorActual === 4) {

          setJugador4Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            console.log([prevPosicion.i, prevPosicion.j]);

            
            if (colores[prevPosicion.i, prevPosicion.j] === 'verde') {
              const minijuegoSeleccionado = Math.random() < 0.5 ? 'flappy_bird' : 'pro_reflex';
              navigate(`${minijuegoSeleccionado}`);
            }
            return posiciones[nuevaPosicion];
          });
        }
        const enviarDatos = async () => {
          try {
            console.log('Datos enviados desde el frontend:', {
              jugador: jugadorActual,
              nuevaPosicion: randomNum,
            });
        
            const response = await axios.post('http://localhost:3000/boards/realizarJugada', {
              jugador: jugadorActual,
              nuevaPosicion: randomNum,
            });
        
            console.log('Respuesta completa de Axios:', response);
        
          } catch (error) {
            console.error('Error al obtener datos del tablero:', error);
          }
        };
        
        enviarDatos();

  

    const countdownInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdownInterval);
          setTimerActive(false);
          siguienteJugador();
          return prevTimer;
        }
      });
    }, 1000);
  }, 3000); 
  }, 2000); 
    };
  }; 

  

  const handlePlayerMove = async (jugadorActual, prevPosicion) => {
    let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
    if (nuevaPosicion >= 29) {
      nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
    }
    console.log(nuevaPosicion);
  
    try {
      // Realizar la solicitud POST al backend con el jugador actual y la nueva posición
      const response = await axios.post('http://localhost:3000/boards/realizarJugada', {
        jugadorActual: jugadorActual,
        nuevaPosicion: nuevaPosicion,
      });
  
      console.log('Response Status:', response.status);
      console.log('Response Data:', response.data);
    
    } catch (error) {
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    }
  
    return posiciones[nuevaPosicion];
  };
  const handleSalirClick = () => {
    setInterfaz('normal');
  };


  return (
    <Layout>
    <div className='contenedor'>
      <div className='tablero'>

        
        {/* Renderiza jugadores y casillas */}
        {datosDelTablero && (
        datosDelTablero.map((jugador, index) => (
          <div className='player' id={`jugador${index + 1}`}>
            <h3>{`Jugador ${index + 1}`}</h3>
            <img className='picture' src={jugadores[index].imagen} alt='icon' />
            <div className='puntos'>
              <div>
                <img className='icons' src={moneda} alt='icon' />
                <p>{jugador.monedas}</p>
                <img className='icons' src={star} alt='icon' />
                <p>{jugador.estrellas}</p>
              </div>
            </div>
          </div>
        ))
      )}
      

      

        {/* Renderiza casillas */}
        {casillas}
      </div>




      

      <div className='interfaz'>
        {/* Renderiza la interfaz normal */}
        {interfaz === 'normal' && (
          <>
            <div className='turno'>
              <h3>Turno de Jugador {jugadorActual}</h3>
            </div>

            <div className='overlay'>
              <img className='dado' src={dado} alt='dado' onClick={handleDadoClick} />
              <span className='overlay-text'>DADO</span>
            </div>

            <div className='overlay'>
              <img className='tienda' src={tienda} alt='tienda' onClick={handleTiendaClick} />
              <span className='overlay-text'>TIENDA</span>
            </div>

            <div className={`timer ${timer <= 10 ? 'warning' : ''}`}>
              {timer}
            </div>
          </>
        )}        
      
        {/* Renderiza la interfaz de potenciadores */}
            {/* Renderiza potenciadores */}
            {interfaz === 'potenciadores' && (
        <>
        <div className='overlay'>
          <img className='fuego' src={fuego} alt='fuego'/>
          <span className='overlay-text'>5 MONEDAS</span>
        </div>

        <div className='overlay'>
          <img className='gandalf' src={gandalf} alt='gandalf'/>
          <span className='overlay-text'>5 MONEDAS</span>
        </div>
        
        <div className='overlay'>
          <img className='fantasma' src={fantasma} alt='fantasma'/>
          <span className='overlay-text'>7 MONEDAS</span>
        </div>
        
        <div className='overlay'>
          <img className='toreto' src={toreto} alt='toreto'/>
          <span className='overlay-text'>8 MONEDAS</span>
        </div>
        
        <div className='overlay'>
          <img className='patricio' src={patricio} alt='fuego'/>
          <span className='overlay-text'>10 MONEDAS</span>
        </div>
  

    

            {/* Renderiza botón para salir */}
            <div className='overlay'>
              <img className='salir' src={salir} alt='salir' onClick={handleSalirClick} />
              <span className='overlay-text'>SALIR</span>
            </div>
    
          </>
          
        )}
              
        {dadoVisible && (
          <img className={`dado-jugable ${rollingDice ? 'rolling' : ''}`}
          src={image} alt='dado' />
        )}
      </div>
    
    </div>

    
  </Layout>
  );
}

export default Tablero;