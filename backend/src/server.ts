import express from 'express';
import cors from 'cors';
import dogRoutes from './routes/dogRoutes.js'; // Verifica que termine en .js

const app = express();

app.use(cors()); // Importante para que el frontend pueda conectar
app.use(express.json()); // NECESARIO para que los POST reciban datos

// ESTA LÍNEA ES LA CLAVE DEL 404
app.use('/api/dogs', dogRoutes); 

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));