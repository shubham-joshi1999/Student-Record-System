const mysql = require('mysql2') ; 

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'student',
    user : 'user',
    password: 'pass'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS students (
        SNo INTEGER AUTO_INCREMENT PRIMARY KEY,
        Roll_Number INTEGER NOT NULL,
        name VARCHAR(50) NOT NULL,
        branch VARCHAR(20) NOT NULL ,
        sgpa FLOAT NOT NULL
     )`,
     function(err,results)
     {
         if(err)
         {
             console.error(err) ;
         }
         else
         {
             console.log("Table Created")
         }
         connection.close() ; 
     }
)