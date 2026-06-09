import type { Request, Response } from 'express';
import * as DogModel from '../models/dogModel.js';

export const getDogs = async (req: Request, res: Response) => {
    try {
        const dogs = await DogModel.getAllDogs();
        res.json(dogs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener perritos' });
    }
};


export const createDog = async (req: Request, res: Response) => {
    try {
        const { nombre, raza, edad } = req.body;
        
        // Validación básica
        if (!nombre || !raza || !edad) {
            return res.status(400).json({ error: 'Faltan datos requeridos (nombre, raza, edad)' });
        }

        const newId = await DogModel.insertDog(nombre, raza, edad);
        res.status(201).json({ message: 'Perrito registrado con éxito', id: newId });
    } catch (error) {
        console.error(error); // Útil para ver qué falló en la terminal
        res.status(500).json({ error: 'Error al registrar el perrito' });
    }
};

export const deleteDog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        // Convertimos el id a número porque viene como string desde la URL
        await DogModel.deleteDogById(Number(id));
        
        res.json({ message: 'Perrito eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el perrito' });
    }
};

export const updateDog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, raza, edad } = req.body;
        
        await DogModel.updateDog(Number(id), nombre, raza, edad);
        res.json({ message: 'Perrito actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el perrito' });
    }
};