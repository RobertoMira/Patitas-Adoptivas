import { pool } from '../config/conexion.js';

export const getAllDogs = async () => {
    const [rows] = await pool.query('SELECT * FROM perros');
    return rows;
};

// Insertar un nuevo perro
export const insertDog = async (nombre: string, raza: string, edad: number) => {
    // result es el objeto de respuesta de MySQL
    const [result]: any = await pool.query(
        'INSERT INTO perros (nombre, raza, edad) VALUES (?, ?, ?)', 
        [nombre, raza, edad]
    );
    // Retornamos el ID recién creado
    return result.insertId;
};

// Eliminar un perro por ID
export const deleteDogById = async (id: number) => {
    await pool.query('DELETE FROM perros WHERE id = ?', [id]);
};

export const updateDog = async (id: number, nombre: string, raza: string, edad: number) => {
    await pool.query(
        'UPDATE perros SET nombre = ?, raza = ?, edad = ? WHERE id = ?',
        [nombre, raza, edad, id]
    );
};