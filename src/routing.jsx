import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import Rules from "./game/rules/rules"
import Play from "./game/game_party/play/play"
import AboutUs from "./game/about_us/aboutus"
import Rank from "./user/rank/rank"
import Login from "./user/login/login"
import Register from "./user/register/register"
import CreateGame from "./game/game_party/create_game/create_game"
import JoinGame from "./game/game_party/join_game/join_game"
import Tablero from "./game/board/tablero"
import FlappyBird from "./game/minigames/flappy_bird/flappy_bird.jsx"
import ProReflex from "./game/minigames/pro_reflex/pro_reflex.jsx"

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/rules" element={<Rules/>} />
                <Route path="/play" element={<Play/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/rank" element={<Rank/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/create_game" element={<CreateGame/>} />
                <Route path="/join_game" element={<JoinGame/>} />
                <Route path="/tablero" element={<Tablero/>} />
                <Route path="/flappy_bird" element={<FlappyBird/>} />
                <Route path ="/pro_reflex" element={<ProReflex/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing