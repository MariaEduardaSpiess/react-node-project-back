
exports.up = function(knex) {
    return knex.schema.createTable('peca', 
    function (table) {
        table.increments();
        table.string('titulo').notNullable();
        table.text('descricao').notNullable();
        table.string('marca').notNullable();
        table.float('valor').notNullable();
        table.integer('estoque').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('peca');
};
