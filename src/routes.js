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

module.exports = routes;