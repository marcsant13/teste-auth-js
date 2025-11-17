import pool from "../model/model.js";

export async function registerUser(email, senha) {

    const userSave =  await pool.query(
        "INSERT INTO tb_usuario (email, senha) VALUES ($1, $2) RETURNING *",
        [email, senha]
    );

    return userSave.rows[0] || null;

}

export async function findUserByEmail(email) {

    const userResult = await pool.query("SELECT * FROM tb_usuario WHERE email = $1", [email]);

    return userResult.rows[0] || null;
    
}