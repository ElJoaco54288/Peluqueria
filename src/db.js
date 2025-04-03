import {createPool} from 'mysql2/promise'
import {DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_NAME} from './config.js'

console.log(DB_HOST);
console.log(DB_PASSWORD);
console.log(DB_PORT);
console.log(DB_USER);
console.log(DB_NAME);

//Establecer conexion a BD
export const conn = await createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

