

import styles from '../../css/NosotrosMain.module.css'

export const NosotrosMain = () => {
  return (
    <>
      <div className= {styles.contenedorHistoria}>
        <div className= {styles.historia}>
          <div className={styles.contenedorTextoHistoria}>
            <h1>Quiénes Somos?</h1>
            <p> 
                Somos un grupo apasionado de voluntarios y defensores de los animales que cree firmemente 
                en las segundas oportunidades. En Patitas Adoptivas, nuestra historia comenzó con una premisa simple: 
                ningún perro debería pasar sus días en la soledad del abandono. <br /> <br />

                Lo que empezó como un pequeño esfuerzo de rescate en Guadalajara, se ha convertido en un centro dedicado 
                a la recuperación integral. No solo brindamos refugio y alimento; creamos un espacio de rehabilitación donde 
                cada perro recibe atención médica, socialización y, sobre todo, el amor necesario para sanar heridas físicas 
                y emocionales. Somos el puente entre un pasado de incertidumbre y un futuro lleno de lealtad y compañía.
            </p>
          </div>
            
          <div className={styles.contenedorImgHistoria}>
            <img src="/public/PerroNosotros.png" alt="PerroInicio" width={400} />
          </div>
        </div>
        
        

        <div className= {styles.contenedorMV}>
          <div className={styles.mV}>
            <h2>Misión</h2>
            <p>
              Rescatar, rehabilitar y encontrar hogares definitivos para perros en situación de calle o abandono, 
              garantizando su bienestar integral mediante atención veterinaria responsable, educación comunitaria 
              sobre la tenencia de mascotas y la promoción de una cultura de adopción basada en el respeto y el 
              amor incondicional.
            </p>
          </div>

          <div className= {styles.mV}>
            <h2>Visión</h2>
            <p>
              Ser un referente de bienestar animal en Guadalajara, aspirando a un futuro donde la 
              sobrepoblación canina sea historia y cada perro sea valorado como un miembro esencial de la 
              familia. Nos proyectamos como una comunidad autosostenible y consciente, donde la empatía guíe 
              cada decisión y la adopción sea la primera opción de todos los ciudadanos.
            </p>
          </div>
        </div>

      </div>

    </>

  )
}
