import './App.css';
import { NavLink } from 'react-router-dom';
import icono from './assets/img/chicken.png';

function Layout({ children }) {
  return (
    <div className='fondo'>
      <nav>
        <ul>
          <li><NavLink to='/' activeClassName='active' >HOME</NavLink></li>
          <li><NavLink to='/rules' activeClassName='active'>RULES</NavLink></li>
          <li><NavLink to='/play' activeClassName='active'>PLAY</NavLink></li>
          <li><NavLink to='/aboutus' activeClassName='active'>ABOUT US</NavLink></li>
          <li><NavLink to='/rank' activeClassName='active'>RANK</NavLink></li>
          <li><NavLink to='/login' activeClassName='active'>LOGIN</NavLink></li>
          <li><NavLink to='/register' activeClassName='active'>REGISTER</NavLink></li>
        </ul>
      </nav>
      <div className='centro'>
        {children}
      </div>
    </div>
  )
}

export default Layout;