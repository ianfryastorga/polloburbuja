import Layout from '../../layout.jsx'
import './aboutus.css'

function AboutUs() {
  return (
    <Layout>
      <div class="container-aboutus">
        <h1>Sobre Nosotros</h1>
        <h3>Grupo: PolloBurbuja</h3>
        <div class="aboutus-grid">
            <div class="container-grids">
              <h3>Ian Fry</h3>
              <p> ianfryastorga@uc.cl </p>
              <p> ianfryastorga </p>
            </div>
            <div class="container-grids">
              <h3> Luis Ramirez</h3>
              <p> Luisramirezzg@uc.cl </p>
              <p> Luisramirezzg </p>
            </div>
            <div class="container-grids">
              <h3>Cristóbal Tolorza</h3>
              <p> Christ.tolorza@uc.cl </p>
              <p> Christ711</p>
            </div>
        </div>
        <h3> Institución: Pontificia Universidad Católica de Chile</h3>
      </div>
    </Layout>
  )
}

export default AboutUs;