const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

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