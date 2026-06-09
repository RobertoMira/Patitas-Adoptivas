import { useState, useEffect } from 'react';
import axios from 'axios';
import { DogForm } from '../componentes/dogForm'; // Tu formulario de crear
import { EditDogForm } from '../componentes/EditDogForm'; // El que acabamos de crear
import styles from '../css/Cards.module.css';

export const Cards = () => {
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState<any>(null); // Estado para saber qué perro editamos

  const loadDogs = async () => {
    const response = await axios.get('http://localhost:3000/api/dogs');
    setDogs(response.data);
  };

  useEffect(() => { loadDogs(); }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3000/api/dogs/${id}`);
    loadDogs();
  };

  return (
    <div>
      <h1 className={styles.mainTitle}>Nuestros Perritos</h1>
      <DogForm onDogAdded={loadDogs} />
      {/* Si hay un perro en edición, mostramos el formulario de edición */}
      {editingDog && (
        <EditDogForm 
          dog={editingDog} 
          onSave={() => { setEditingDog(null); loadDogs(); }} 
          onCancel={() => setEditingDog(null)} 
        />
      )}

      <div className={styles.gridContainer}>
        {dogs.map((dog: any) => (
          <div  key={dog.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{dog.nombre}</h3>
            <p className={styles.cardDetails}>{dog.raza} - {dog.edad} años</p>
            
            {/* Botón que activa el modo edición */}


              <div className={styles.buttonGroup}>
                <button 
                  className={styles.editButton} 
                  onClick={() => setEditingDog(dog)}
                >
                  Editar
                </button>
                <button 
                  className={styles.deleteButton} 
                  onClick={() => handleDelete(dog.id)}
                >
                  Eliminar
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};