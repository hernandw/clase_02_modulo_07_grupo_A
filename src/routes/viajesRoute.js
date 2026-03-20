import express from "express";
import { getViajes,  createViaje, deleteViaje} from "../controllers/viajesController.js";

const router = express.Router();

router.get('/viajes', getViajes)

router.post('/add-viaje', createViaje)

router.delete('/viaje/:id', deleteViaje)

export default router;
