import pool from "../config/db.js";

export const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM viajes ");
  return rows;
};

export const create = async (destino, presupuesto, descripcion) => {
  const query =
    "INSERT INTO viajes(destino, presupuesto, descripcion) values ($1, $2, $3) returning *";
  const values = [destino, presupuesto, descripcion];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const deleteById = async (id) => {
  const { rows } = await pool.query(
    "DELETE FROM viajes WHERE id = $1 returning *",
    [id],
  );
  return rows[0];
};

export const findById = async(id)=>{
  const { rows } = await pool.query("SELECT * FROM viajes WHERE id = $1 returning *", [id])
  return rows
}