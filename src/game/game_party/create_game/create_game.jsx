import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./create_game.css";
import Layout from '../../../layout.jsx';
import amongus from '../../../assets/img/among_us.png';
import angrybirds from '../../../assets/img/angry_birds.png'
import baby_yoda from '../../../assets/img/baby_yoda.png';
import patricio from '../../../assets/img/patricio.png';
import steve from '../../../assets/img/steve.png';
import hotdog from '../../../assets/img/hot dog.png';
import clashroyale from '../../../assets/img/clash royale.png';
import bugs from '../../../assets/img/bugs bunny.png';

const characters = [
  {name: 'Among Us', img: amongus},
  {name: 'Angry Birds', img: angrybirds},
  {name: 'Baby Yoda', img: baby_yoda},
  {name: 'Patricio', img: patricio},
  {name: 'Steve', img: steve},
  {name: 'Hot Dog', img: hotdog},
  {name: 'Clash Royale', img: clashroyale},
  {name: 'Bugs Bunny', img: bugs}
]

function CreateGame() {
  const [datagame, setDataGame] = useState(null);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const location = useLocation();
  const id_game = new URLSearchParams(location.search).get('id_game');
  const code = new URLSearchParams(location.search).get('code');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      window.location.href = '/tablero';
    }
  }, [timeRemaining, id_game, code]);
  const GetDataGame = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/datagame`, {
        id: id_game,
      });
      setDataGame(response.data);
      setMsg('Te has unido a la partida.');
    } catch (error) {
      setMsg('Error al obtener la información del juego.');
    }
  };

  const handleDeleteGame = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/deletegame`, {
        id: id_game,
      });
      setMsg(response.data);
      window.location.href = "/play";
    } catch (error) {
      setMsg('Error al eliminar la información del juego.');
    }
  };

  useEffect(() => {
    GetDataGame();
  }, []);

  useEffect(() => {
    if (datagame && datagame.players.length !== 4) {
      handleDeleteGame();
    }
  }, [datagame]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!datagame) {
    return <p>Cargando...</p>;
  }


  return (
    <Layout>
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}

      {datagame.players.map((player) => {
        // Buscar el personaje correspondiente al avatar del jugador
        const character = characters.find((char) => char.name === player.avatar);

        return (
          <div key={player.id}>
            <div className="jugador" id={`jugador${player.num_player}`}>
              <h3>Jugador {player.num_player}</h3>
              {character && <img className='avatar' src={character.img} alt="icon" />}
            </div>
          </div>
        );
      })}
      
      {/* {datagame.players.map((player) => (
        <div key={player.id}>
          <div className="jugador" id={`jugador${player.num_player}`}>
            <h3>Jugador {player.num_player}</h3>
            
            <img className='avatar' id={player.avatar} src={player.avatar} alt="icon"/>
          </div>
        </div>
      ))} */}
      <div>
        {timerExpired ? (
          <p>¡Tiempo expirado!</p>
        ) : (
          <p>Tiempo restante: {timeRemaining} segundos</p>
        )}
      </div>

      <div className="jugador" id="centro">
        <h3>Código de Sala</h3>
        <p>{code}</p>
      </div>
    </Layout>
  );
}

export default CreateGame;