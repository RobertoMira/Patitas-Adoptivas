import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Cambia por tu usuario
    password: '123456789', // Cambia por tu password
    database: 'patitas_db'
});