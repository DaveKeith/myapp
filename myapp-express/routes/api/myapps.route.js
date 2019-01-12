var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var MyAppController = require('../../controllers/myapp.controller.js');


// Map each API to the Controller FUnctions

router.get('/', MyAppController.getMyApps)

router.post('/', MyAppController.createMyApp)

// router.put('/', ToDoController.updateTodo)

// router.delete('/:id',ToDoController.removeTodo)


// Export the Router

module.exports = router;