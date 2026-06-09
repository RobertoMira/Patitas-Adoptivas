import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/EditDogForm.module.css'; // Asegúrate de que la ruta sea correcta

interface Props {
  dog: any;
  onSave: () => void;
  onCancel: () => void;
}

export const EditDogForm = ({ dog, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState({ nombre: '', raza: '', edad: '' });

  useEffect(() => {
    setFormData({ nombre: dog.nombre, raza: dog.raza, edad: dog.edad });
  }, [dog]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/dogs/${dog.id}`, formData);
      onSave(); // Refresca la lista y cierra el form
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Editando a {dog.nombre}</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          className={styles.inputField}
          value={formData.nombre} 
          onChange={e => setFormData({...formData, nombre: e.target.value})} 
          placeholder="Nombre" 
          required 
        />
        <input 
          className={styles.inputField}
          value={formData.raza} 
          onChange={e => setFormData({...formData, raza: e.target.value})} 
          placeholder="Raza" 
          required 
        />
        <input 
          className={styles.inputField}
          type="number" 
          value={formData.edad} 
          onChange={e => setFormData({...formData, edad: e.target.value})} 
          placeholder="Edad" 
          required 
        />
        
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveButton}>Guardar Cambios</button>
          <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};