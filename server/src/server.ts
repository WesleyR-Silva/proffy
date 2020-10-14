import express, { request } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos
// GET = Buscar ou listar informação
// POST = Criar alguma nova informação
// PUT = Atualizar alguma informação
// DELETE = Deletar uma informação existente

// Corpo (Request, body) = Dados para criação ou atualização de um registro
// Route Params: Identitificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação


// Exemplos
// app.post('/users', (request, response) => {
//     console.log(request.body);
// })

// app.post('/users', (request, response) => {
//     const users = [
//     { name: 'Wesley', age:27 },
//     { name: 'Cynthia', age:25 },
//     ];

//     return response.json(users);
// })

app.listen(3333);