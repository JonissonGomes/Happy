import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './errors/handler';

import './database/connection';
import routes from './routes';


// 


// Criando Servidor para Request/Response
const app = express();


// 
app.use(cors());

//Indicar que vai utilizar JSON
app.use(express.json());

// 
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler); 


// Tipos de rotas
// GET = Busca uma informação
// POST = Cria uma informação
// PUT = Edita uma informação
// DELETE = Deleta uma informação

//Parameters:
// Query: http://localhost:3333/user?search=jonisson&page2
// console.log(request.query);

// Route Params: http://localhost:3333/users/1 (Identificar um recurso no DB)
// console.log(request.params);    

// Utilizar as rotas que estão em routes.ts
app.use(routes);

// Ouve o servidor na porta 3333
app.listen(3333);

