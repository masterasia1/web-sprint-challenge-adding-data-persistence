// build your `Resource` model here
const db = require('../../data/dbConfig')


module.exports = {
  find,
  add,
 }

 function find () {
   return db('resources')
 }

 async function add (resource) {
  const [resource_id] = await db('resources').insert(resource);
  return find().where({ resource_id }).first();
}