import {createPool} from 'mysql2/promise'
import {DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_NAME} from './config.js'

//Establecer conexion a BD
export const conn = await createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

