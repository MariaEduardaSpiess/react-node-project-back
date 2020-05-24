
exports.up = function(knex) {
    return knex.schema.createTable('item_pedido', 
    function (table) {
        table.increments().primary();
        table.string('valor').notNullable();
        table.string('quantidade').notNullable();
        table.integer('pedidoId').notNullable().references('id').inTable('pedido');
        table.integer('pecaId').notNullable().references('id').inTable('peca');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('item_pedido');
};
