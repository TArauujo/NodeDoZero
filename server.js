/* Criando o servidor na "mão" */
// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello, World!!');

//     return response.end();
// })

// server.listen(3333)

/* Criando o servidor com o framework "Fastify" */

import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js'; //Por causa do 'package.json/"type":"module", precisa colocar o .js no final'

const server = fastify();

const database = new DatabaseMemory()

/* Com o fastify, da pra criar rotas diferentes de forma direta: '/nomeDaRota'*/

/* POST http://localhost:3333/videos endereço para a CRIAÇÃO no CRUD, usando método POST*/

//Resquest Body
server.post('/videos', (request, reply) =>{
    const { title, description, duration } = request.body;

    database.create({
        title,
        description,
        duration,
    })
    //console.log(database.list())

    return reply.status(201).send();
})

server.get('/videos', (request, reply) => {
    const search = request.query.search

    
    const videos = database.list(search)
    return videos;
})

/* Route Parameter : Para marcar o ID, podendo usar ele nos endereços*/

/* PUT http://localhost:3333/videos/'idDoProduto' endereço para a ALTERAÇÃO no CRUD, usando o método PUT*/
server.put('/videos/:id', (request, reply) =>{
    const videoId = request.params.id;
    const { title, description, duration } = request.body;

    database.update(videoId, {
        title,
        description,
        duration,
    })
    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply)=>{
    const videoId = request.params.id;

    database.delete(videoId, {

    })
    return reply.status(204).send()
})

server.listen({
    port:3333,
})
