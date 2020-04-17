const { Router } = require('express');
const  { todosTable }  = require('../db');
const noteroute = require('./note')

const route = Router();
route.use("/note",noteroute)


//Getting all data details

route.get('/', async(req, res) => {
    const todos = await todosTable.findAll();
    res.send(todos)
    
  });
  
//Getting data details by id

  route.get('/:id', async(req, res) => {
    if (isNaN(Number(req.params.id))) {
      return res.status(400).send({
        error: 'Todo id must be an integer' 
      })
      return}
    
    const todo = await todosTable.findByPk(req.params.id);
  
    if (!todo) {
      return res.status(404).send({
        error: "No todo found with id = " + req.params.id
      })
    }
    res.send(todo)
    })
           
    
  //Creating  a new task getting request of object to add.
  route.post('/', async(req, res) => {
    if (typeof req.body.task != 'string') {
      return res.status(400).send({ error: 'Title name not provided' });
    }
    if (req.body.done == 'true') {
      req.body.done = false;
    } 
    
    const title = req.body.task;

    const newTodo = await todosTable.create({
      task: req.body.task,
      done: req.body.done,
      due: req.body.due,
      priority: req.body.priority,
      description: req.body.description
    })
    .then(newTodo => {
      res.json(newTodo);
    })
    .catch(err => console.log(err));
   //res.status(201).send({success: 'New Task Added', data: newTodo })
});




route.patch('/:id',async (req, res) => {
  let id = req.params.id
  
  let task = await Todo.findByPk(id)
     
     task.done= req.body.done
     task.due= req.body.due
     task.priority= req.body.priority
     await task.save();

  res.status(201).send({success: ' task updated', data: task})
})

module.exports = route