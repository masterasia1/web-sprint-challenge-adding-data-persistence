
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments ('project_id');
      tbl.text('project_name')
        .notNullable();
      tbl.text(`project_description`);
      tbl.boolean('project_completed')
         .notNullable()
         .defaultTo(0);
  })
  .createTable('resources', tbl => {
    tbl.increments ('resource_id');
    tbl.text('resource_name')
        .unique()
        .notNullable();
    tbl.text(`resource_description`);
  })
  .createTable('tasks', tbl =>{
    tbl.increments ('task_id');
    tbl.text('task_description')
        .notNullable();
    tbl.text(`task_notes`);
    tbl.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects');
    tbl.boolean('task_completed')
        .defaultTo(0)
        ;
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

//[ ] A **resource assignment** connects a resource and a project, and is stored in a `` table. You decide what columns to use.

//- [ ] `project_completed` - the database defaults it
// to `false` (integer 0) if not provided


//  - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
