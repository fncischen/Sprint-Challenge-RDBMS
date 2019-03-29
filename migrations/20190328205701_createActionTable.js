exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", function (tbl){
      tbl.increments();
      tbl.string("name").references("name").inTable("projects")
      tbl.text("description");
      tbl.string("notes");
      tbl.bool("completed");
  
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists("actions");
  }
  