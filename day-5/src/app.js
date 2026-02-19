const express = require('express')
const notesModel = require("./models/notes.model")

const app = express()

app.use(express.json())



app.post("/notes",async(req,res)=>{
    const {title,description} = req.body

    const note = await notesModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note created successfully.",
        note
    })
})

// app.get("/notes",(req,res)=>{
//     res.status(200).json({
//         notes: notes
//     })
// })

// app.delete("/notes/:index",(req,res)=>{
//    delete notes[req.params.index]
//    res.status(204).json({
//    message:"Note deleted successfully."
//    })

// })
// app.patch("/notes/:index",(req,res)=>{
//    notes[req.params.index].description = req.body.description
//    res.status(200).json({
//     message:"Note updated successfully."
//    })
// })

module.exports = app