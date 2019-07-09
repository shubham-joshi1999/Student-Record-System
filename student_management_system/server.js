const express = require('express') ;
const srv = express() ;  
const path = require('path')

srv.use(express.json()) ; 
srv.use(express.urlencoded({extended:true})) ;  

srv.use('/students',require('./routes/students').route) ;

srv.use('/',express.static(path.join(__dirname + '/public'))) ;

srv.listen(1234 , ()=>
{
    console.log("Server started on http://localhost:1234/") ; 
})

