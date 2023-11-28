import Layout from '../../layout.jsx'
import "./rank.css"

function Rank() {
  return (
    <Layout>
      <div class="container-rank">
        <h1> Ranking Mejores Jugadores</h1>
        <div class="grid-rank">
          <div>
            <h3>Nombre de Usuario</h3>
            <ol id="lista-names">
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li>Pedro god</li>
              <li value="43"> Usuario</li>
            </ol>
          </div>
          <div>
            <h3> Puntaje de Victorias </h3>
            <ol id="lista-score">
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li>38 victorias</li>
              <li> 2 victorias</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Rank;