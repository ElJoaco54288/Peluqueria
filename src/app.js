import express from 'express'
import {conn} from './db.js'
import {PORT} from './config.js'

const app = express();

app.get('/', async(req, res) => {
    const [rows] = await conn.query(`SELECT * FROM turnos`)
    res.json(rows)
})

app.get('/ping', async(req, res) => {
    const [result] = await conn.query(`SELECT "hello world" as RESULT`);
    res.json("el servidor responde algo :D")
})

app.listen(PORT);
console.log("Server on port ", PORT);