
exports.up = function(knex) {
    return knex.schema.createTable('pedido', 
    function (table) {
        table.increments().primary();
        table.integer('quantidade').notNullable();
        table.integer('pecaId').notNullable().references('id').inTable('peca');
        table.integer('clienteId').notNullable().references('id').inTable('cliente');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedido');
};
