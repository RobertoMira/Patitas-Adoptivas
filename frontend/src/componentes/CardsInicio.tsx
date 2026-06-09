import styles from '../css/CardsInicio.module.css';

export const CardsInicio = () => {
  return (
    <>
        <div className={styles.gridContainer}>
      
      <div className={styles.opcion}>
        <h2>Adopta</h2>
        <p>
          "Mira a los perros que actualmente están en nuestro albergue y listos 
          para ser parte de tu familia. Tu próximo mejor amigo está a un clic de distancia."
        </p>
      </div>

      <div className={styles.opcion}>
        <h2>Sé Voluntario</h2>
        <p>
          "El amor no siempre se mide en dinero. Únete a nuestro equipo de 
          paseadores, fotógrafos o ayudantes y dedica un tiempo a los que más lo necesitan."
        </p>
      </div>

      <div className={styles.opcion}>
        <h2>Donaciones</h2>
        <p>
          "Alimento, medicinas y productos de limpieza son constantes en nuestra operación. 
          Tu donativo, por pequeño que sea, garantiza su bienestar diario."
        </p>
      </div>
      
    </div>    
    </>
  );
};