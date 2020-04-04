
//a função que vai ser rodada ao rodar a migration
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

//Caso de erro ao rodar a migration
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
