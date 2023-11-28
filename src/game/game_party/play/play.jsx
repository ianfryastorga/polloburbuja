import Layout from '../../../layout.jsx'
import "./play.css"
import axios from 'axios';
import React, { useState } from 'react';

function Play() {
  const [username, setUsername] = useState("");
  const [createcode, setCreateCode] = useState("");
  const [joincode, setJoinCode] = useState(""); 
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const CreateGameSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/newgame`, {
        username: username,
        code: createcode
      }).then((response) => {
        console.log('Juego Creado, Ahora tienes que esperar que otros se unan');
        window.location.href = `/join_game?id_game=${response.data.id_game}&code=${response.data.code}`;
        setError(false);
        setMsg('Juego Creado, Ahora tienes que esperar que otros se unan');
      }).catch((error) => {      
      console.error('Ocurrió un error:', error);
      setError(true);
      });
    }

  const JoinGameSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/joingame`, {
        code: joincode
      }).then((response) => {
        window.location.href = `/join_game?id_game=${response.data.id}&code=${response.data.code}`;
        setError(false);
        setMsg('Te has unido a la partida, Ahora tienes que esperar que otros se unan');
      }).catch((error) => {      
      console.error('Ocurrió un error:', error);
      setError(true);
      });
    }

  return (
    <Layout>
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}
      
      <div className="button-container">
        <form onSubmit={CreateGameSubmit}>
          <label>
            Username:
            <input 
              type="text" 
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Create Code:
            <input 
              type="text" 
              name="createcode"
              value={createcode}
              onChange={e => setCreateCode(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="CREAR PARTIDA" className='gradient-button'/>
        </form>
        <form onSubmit={JoinGameSubmit}>
          <label>
            Code to Join:
            <input 
              type="text" 
              name="joincode"
              value={joincode}
              onChange={e => setJoinCode(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="UNIRSE A LA PARTIDA" className='gradient-button'/>
        </form>
      </div>
    </Layout>
  );
}

//     <Layout>
//       <div className="button-container">
//         <a href='/create_game'><button className='gradient-button'><h1 className='button-play'>CREAR UNA PARTIDA</h1></button></a>
//         <a href='/join_game'><button className='gradient-button'><h1 className='button-play'>UNIRSE A UNA PARTIDA</h1></button></a>
//       </div>
//     </Layout>
//   )
// }

export default Play;