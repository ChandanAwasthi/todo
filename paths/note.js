const { Router } = require('express')
const  notes = require('../database').notes
const route = Router()

route.get("/:id", async (req,res)=>{
    let id = req.params.id
   const allNotes = await notes.findAll(
    {
      attributes: ['id', 'note', 'main_id'],
      where:{
        main_id: id
      }
    }
  )
   res.send(allNotes)
     })

route.post('/:id', async(req,res) => {
        let main_id = req.params.id
        
        let note = req.body.note
           await notes.create(
          {
            note : note,
            main_id : main_id
        }
        )
        res.status(201).send({ response: 'New Note added', data: note })
      
      })

      module.exports = route