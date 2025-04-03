/* 
  Definimos las variables de conexión a la base de datos con valores por defecto.

  ✔ Sirve para que la configuración sea flexible y adaptable a diferentes entornos.
  ✔ Se usa `||` para que, en caso de no tener una variable de entorno definida, 
    se utilice un valor por defecto.
*/

console.log(process.env)

//Puerto web
export const PORT = process.env.PORT || 3000

//Puerto BD
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_NAME = process.env.DB_NAME || 'peluqueria'
export const DB_PORT = process.env.DB_PORT || 3306