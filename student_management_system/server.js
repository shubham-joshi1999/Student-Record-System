const express = require('express') ;
const srv = express() ;  
const path = require('path')
const Server_Port = process.env.PORT || 1234 ;
srv.use(express.json()) ; 
srv.use(express.urlencoded({extended:true})) ;  

srv.use('/students',require('./routes/students').route) ;

srv.use('/',express.static(path.join(__dirname + '/public'))) ;

srv.listen(Server_Port , ()=>
{
   // console.log("Server started on http://localhost:1234/") ; 
})

