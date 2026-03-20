import { findAll, create, deleteById, findById } from "../models/viajesModel.js";

const getViajes = async (req, res) => {
  try {
    const viajes = await findAll();
    res.json(viajes);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los viajes",
    });
  }
};

const createViaje = async (req, res) => {
  try {
    const { destino, presupuesto, descripcion } = req.body;
    const newViaje = await create(destino, presupuesto, descripcion);
    res.status(201).json(newViaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear viaje" });
  }
};

const deleteViaje = async(req, res)=>{
    try {
        
       const viajeEliminado =   await deleteById(req.params.id)
        res.json(viajeEliminado)
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: "Error al eliminar viaje" });
    }
}

const getViajeById = asyc(req, res)=>{
  try {
    const id = req.params.id
  const viaje = await findById(id)
  res.json(viaje)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener viaje" });
  }
}

export { getViajes, createViaje, deleteViaje };
