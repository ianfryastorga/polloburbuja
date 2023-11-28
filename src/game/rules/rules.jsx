import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Layout from '../../layout.jsx'
import './rules.css'

function Rules() {
  return (
    <Layout>
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} width='60vw'>
        <div>
          <h1>Inicio de Partida</h1>
          <p>• La partida comienza con 4 jugadores fijos, sin posibilidad de cambios.</p>
          <p>• Cada jugador comienza con 10 monedas.</p>
        </div>
        <div>
          <h1>Turnos y Movimientos</h1>
          <p>• Los jugadores se turnan según un orden predeterminado.</p>
          <p>• Se lanza un dado de 6 caras al principio de cada turno para determinar las casillas a avanzar.</p>
          <p>• Cada turno tiene un límite de tiempo de 20 segundos.</p>
        </div>
        <div>
          <h1>Sistema de Monedas</h1>
          <p>• Los jugadores pueden ganar o perder monedas según la casilla en la que caigan.</p>
          <p>• Las monedas se pueden gastar en la tienda para comprar potenciadores.</p>
        </div>
        <div>
          <h1>Opciones en el Turno</h1>
          <p>• En su turno, cada jugador puede elegir entre lanzar el dado o acceder a la tienda.</p>
          <p>• La tienda permite comprar potenciadores que se activan inmediatamente en el mismo turno.</p>
        </div>
        <div>
          <h1>Potenciadores</h1>
          <p>• Toreto:</p>
          <p id='minigame'>Le entrega al jugador un dado extra, el jugador dependiendo del resultado en la suma de los dados.</p>
          <p>• Fuego:</p>
          <p id='minigame'>Deja todas las casillas que recorra el jugador en su turno de color rojo.</p>
          <p>• Gandalf:</p>
          <p id='minigame'>Bloquea el siguiente turno de un jugador a elección</p>
        </div>
        <div>
          <h1>Potenciadores</h1>
          <p>• Patricio SWAT:</p>
          <p id='minigame'>Activa un minijuego al azar inmediatamente, luego de esto el jugador vuelve a su turno normal.</p>
          <p>• Fantasma:</p>
          <p id='minigame'>Entrega invulnerabilidad a perder monedas en casillas rojas y activar minijuegos en casillas verdes.</p>

        </div>
        <div>
          <h1>Casillas en el Tablero</h1>
          <p>• El tablero está compuesto por 3 tipos de casillas: verde (minijuego), azul (ganar monedas) y rojo (perder monedas).</p>
          <p>• Al caer en una casilla verde, se activará un minijuego al azar, cuyo ganador obtendrá 1 estrella.</p>
        </div>
        
        <div>
          <h1>Minijuegos</h1>
          <p>• Flappy bird por turnos.</p>
          <p id='minigame'>El mini juego “Flappy Bird” es un desafío de habilidad para los jugadores. Cada jugador controla un ave que debe volar a través de tubos estáticos, ganando un punto por cada tubo que atraviesa. El jugador debe mover el ave hacia arriba y hacia abajo para evitar los tubos. El juego termina cuando el ave choca con un tubo o toca la parte superior o inferior de la pantalla. Los jugadores juegan por turnos y el que obtiene la puntuación más alta gana. En caso de empate, se realiza una ronda adicional.</p>
        </div>
        <div>
          <h1>Minijuegos</h1>
          <p>• Pro Reflex.</p>
          <p id='minigame'>“Pro Reflex” es un juego de reflejos para 4 jugadores. Cada jugador debe presionar la tecla de espacio cuando un objeto en movimiento se alinea con un círculo en el centro de la pantalla. Los puntos se otorgan según cuán precisamente se alinee el objeto con el círculo cuando se presiona la tecla. Los jugadores juegan por turnos y el que obtiene la puntuación más baja es eliminado. El juego continúa hasta que solo queda un jugador, quien es declarado ganador.</p>
        </div>
        <div>
          <h1>Estrellas y Victoria</h1>
          <p>• Completar una vuelta alrededor del tablero otorga al respectivo jugador 1 estrella.</p>
          <p>• El juego tiene un límite de 10 rondas. El jugador con más estrellas al final de estas gana.</p>
          <p>• Si un jugador alcanza 5 estrellas antes de la ronda 10, gana automáticamente.</p>
        </div>
        <div>
          <h1>Sistema de Cuentas</h1>
          <p>• Para crear una partida, los jugadores deben registrarse o iniciar sesión en la plataforma.</p>
          <p>• Jugadores no registrados únicamente pueden unirse a partidas.</p>
        </div>
        <div>
          <h1>Roles de Administrador</h1>
          <p>• Control del tiempo límite por turno.</p>
          <p>• Modificación del número de estrellas requeridas para ganar.</p>
        </div>
        <div>
          <h1>Empates</h1>
          <p>• En caso de existir empate por estrellas al finalizar el turno 10 el resultado será determinado de la siguiente forma:</p>
          <p id ='minigame'>- En cualquier caso la final será una partida de Flappy Bird con los jugadores empatados.</p>
          <p>El ganador del minijuego final, será el ganador de la partida.</p>
        </div>
      </Carousel>
    </Layout>
  )
}

export default Rules;