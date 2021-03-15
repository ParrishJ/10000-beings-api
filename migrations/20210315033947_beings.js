
exports.up = function(knex) {
    return knex.schema
    .createTable("beings", tbl => {
        tbl.increments()
        tbl.string("name", 128).notNullable()
        tbl.string("description").notNullable()
    })
  
    .createTable("categories", tbl => {
        tbl.increments()
        tbl.string("category_name", 128).notNullable()
        tbl.string("category_description").notNullable()
    })
  
    .createTable('being_categories', tbl => {
        tbl.increments()
        tbl.integer("being_id").unsigned().notNullable().references("beings.id")
        tbl.integer("category_id").unsigned().notNullable().references("categories.id")
    })
  
    .createTable('being_actions', tbl => {
        tbl.increments()
        tbl.integer("being_id").unsigned().notNullable().references("beings.id")
        tbl.string("action_description").notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("being_actions").dropTableIfExists("being_categories").dropTableIfExists("beings").dropTableIfExists("categories")
  };
  