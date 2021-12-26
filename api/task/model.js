// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
 //add,
 }

 function find() { 
  return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id','p.project_name','p.project_description','t.task_description');
}




  //[ ] `[GET] /api/tasks`
 // - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
 // - Each task must include `project_name` and `project_description`
