const route = require('express').Router() ; 

const db= require('../db') ;

route.get('/studentlist/',(req,res)=>
{
    db.getAllstudents().then((students) =>res.send(students))
    .catch((err=>res.send({error : err})))
})

route.post('/studentlist/',(req,res)=>
{
    db.addNewStudent(req.body.Roll_Number,req.body.name,req.body.branch,req.body.sgpa).then(()=>res.redirect('/students/studentlist/')).catch((err)=>res.send({error:err}))
})

exports = module.exports = {
    route
}