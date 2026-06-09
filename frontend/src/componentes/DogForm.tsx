import { useState } from 'react';
import axios from 'axios';
import styles from '../css/DogForm.module.css';

interface DogFormProps {
  onDogAdded: () => void;
}

export const DogForm = ({ onDogAdded }: DogFormProps) => {
  const [formData, setFormData] = useState({
    nombre: '',
    raza: '',
    edad: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:3000/api/dogs', {
        ...formData,
        edad: parseInt(formData.edad)
      });

      setFormData({ nombre: '', raza: '', edad: '' });
      onDogAdded(); 
      alert("¡Perrito registrado con éxito!");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Hubo un error al registrar al perrito");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Registrar nuevo perro</h3>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          className={styles.inputField}
          placeholder="Nombre" 
          value={formData.nombre}
          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          required
        />
        
        <input 
          className={styles.inputField}
          placeholder="Raza" 
          value={formData.raza}
          onChange={(e) => setFormData({...formData, raza: e.target.value})}
          required
        />
        
        <input 
          className={styles.inputField}
          type="number" 
          placeholder="Edad" 
          value={formData.edad}
          onChange={(e) => setFormData({...formData, edad: e.target.value})}
          required
        />
        
        <button type="submit" className={styles.saveButton}>Guardar Perro</button>
      </form>
    </div>
  );
};