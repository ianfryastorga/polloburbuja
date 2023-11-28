import Layout from '../../layout.jsx'
import './login.css'

function Login() {
  return (
    <Layout>
      <div className='login_container'>
        <h3>Ingrese su correo electrónico:</h3>
        <input type='text' placeholder='Correo Electrónico' className='input_login_correo'></input>

        <h3>Ingrese su contraseña:</h3>
        <input type="password" placeholder='Contraseña' className='input_login_contraseña'></input>

        <button type = "submit" className='boton_login'>
          Iniciar Sesión
        </button>

      </div>
    </Layout>
  )
}

export default Login;
