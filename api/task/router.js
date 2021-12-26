// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.find()
      .then(tasks => {
        res.json(tasks)
      })
      .catch(next)
  })

//[ ] `[GET] /api/tasks`
 // - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
 // - Each task must include `project_name` and `project_description`

module.exports = router
