const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/login', async (request, response) => {
    let res;
    await connection('usuario').where({'email': request.body.email, 'senha': request.body.senha})
        .then(resServer => {
            res = resServer;
        });
    return response.json(res);
});

routes.post('/peca', async (request, response) => {
    await connection('peca').insert(request.body);
    return response.json();
});

routes.get('/peca', async (request, response) => {
    const pecas = await connection('peca').select('*');

    return response.json(pecas);
});

routes.post('/cliente', async (request, response) => {
    await connection('cliente').insert(request.body);
    return response.json();
});

routes.get('/cliente', async (request, response) => {
    const pecas = await connection('cliente').select('*');

    return response.json(pecas);
});

routes.post('/pedido', async (request, response) => {
    await connection('pedido').insert(request.body);
    return response.json();
});

routes.get('/pedido', async (request, response) => {
    const pecas = await connection('pedido').select('*');

    return response.json(pecas);
});

module.exports = routes;