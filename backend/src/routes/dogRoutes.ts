import { Router } from 'express';
import { getDogs, createDog, deleteDog, updateDog } from '../controllers/dogController.js';


const router = Router();

router.get('/', getDogs);
router.post('/', createDog); // Aquí defines la ruta relativa
router.delete('/:id', deleteDog);
router.put('/:id', updateDog);

export default router; // ¡IMPORTANTE! Debe ser export default