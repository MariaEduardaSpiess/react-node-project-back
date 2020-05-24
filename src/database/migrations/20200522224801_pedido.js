
exports.up = function(knex) {
    return knex.schema.createTable('pedido', 
    function (table) {
        table.increments().primary();
        table.string('valorTotal').notNullable();
        table.string('meioPagamento').notNullable();
        table.integer('clienteId').notNullable().references('id').inTable('cliente');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedido');
};
