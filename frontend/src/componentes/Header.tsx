import style from '../css/Header.module.css'
import { Link } from 'react-router'

export const Header = () => {
  return (
    <>

        <header className={style.contenedorHeader}>

            <div className={style.contenedorHeaderIzquierdo}>
                <div >
                <img src="/public/PatitasLogo.png" alt="" className={style.logo}/>
                </div>

                <div>
                    <p className={style.textoLogo}>Patitas Adoptivas</p>
                </div>
            </div>
            
            <nav className={style.menuSuperior}>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/nosotros">NOSOTROS</Link></li>
                <li><Link to="/catalogo">CATÁLOGO</Link></li>
                <li><Link to="">AYUDA</Link></li>
                <li><Link to="ingresar">INGRESAR</Link></li>
            </nav>
        </header>

        <div className={style.contenedorBarra}>
            <img src="/public/linea-web.png" alt="Barra" />
        </div>
        
    </>
  )
}
