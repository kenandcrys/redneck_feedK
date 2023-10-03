function createAnimalTable(knex, tableName) {
    return knex.schema.createTable(tableName, function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.decimal('pricePerBag');
      table.decimal('pricePer20');
      table.decimal('pricePer40');
      table.text('url');
    });
  }
  
  exports.up = function(knex) {
    return Promise.all([
      createAnimalTable(knex, 'Cattle'),
      createAnimalTable(knex, 'Swine'),
      createAnimalTable(knex, 'Rabbit'),
      createAnimalTable(knex, 'Equine'),
      createAnimalTable(knex, 'Poultry'),
      createAnimalTable(knex, 'SheepAndGoat'),
      createAnimalTable(knex, 'StraightGrains')
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTable('Cattle'),
      knex.schema.dropTable('Swine'),
      knex.schema.dropTable('Rabbit'),
      knex.schema.dropTable('Equine'),
      knex.schema.dropTable('Poultry'),
      knex.schema.dropTable('SheepAndGoat'),
      knex.schema.dropTable('StraightGrains')
    ]);
  };