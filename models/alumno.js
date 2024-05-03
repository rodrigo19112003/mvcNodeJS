const pool = require('../data/datacontext')

const list = async function() {
    const [rows, fields] = await pool.query(
        `SELECT alumno.id, alumno.nombre, alumno.promedio, materia.nombre AS materia_nombre
            FROM materia INNER JOIN alumno ON materia.id = alumno.id_materia`
    );

    return rows;
}

module.exports = { list }