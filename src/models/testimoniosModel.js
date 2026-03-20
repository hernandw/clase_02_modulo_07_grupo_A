import pool from '../config/db.js'

export const findAll = async()=>{
    const result = await pool.query("SELECT * FROM testimonios")
}