import 'dotenv/config'

import animecontroller from './src/controller/animecontroller.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());
server.use(animecontroller);

server.listen(process.env.PORT, () => console.log(`API conectado na porta ${process.env.PORT}`));


