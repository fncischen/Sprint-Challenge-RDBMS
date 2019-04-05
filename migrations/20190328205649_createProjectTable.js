
exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function (tbl){
    tbl.increments();
    tbl.string("name").unique().notNullable();
    tbl.text("description");
    tbl.bool("completed");

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
}
