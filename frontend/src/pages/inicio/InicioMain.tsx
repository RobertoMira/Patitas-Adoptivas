import { Link } from 'react-router'
import { CardsInicio } from '../../componentes/CardsInicio'

import styles from '../../css/InicioMain.module.css'

export const InicioMain = () => {
  return (
    <>
        <main className={styles.contenedorInicio}>
            <h1>PATITAS ADOPTIVAS</h1>
            <p>"Cambia un destino, encuentra a tu mejor amigo"</p>
            <p>En Patitas Adoptivas, rescatamos, rehabilitamos y buscamos hogares amorosos para perros que esperan una segunda oportunidad.</p>
            <Link to="/catalogo">Ver Perritos</Link>

            <CardsInicio/>
        </main>
    
    </>
  )
}
