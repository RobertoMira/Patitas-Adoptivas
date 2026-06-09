import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Cambia por tu usuario
    password: 'MyMirai123', // Cambia por tu password
    database: 'patitas_db'
});