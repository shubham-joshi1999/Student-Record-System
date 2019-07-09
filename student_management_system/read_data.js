const mysql = require('mysql2') ; 

const connection = mysql.createConnection({
    host : 'localhost' ,
    database : 'student',
    user : 'user',
    password : 'pass' 
})

connection.query(
    `SELECT * FROM students`,
    function(err,rows,cols)
    {
        if(err)
        {
            console.error(err) ; 
        }
        else
        {
            console.log(rows) ; 
            console.log(cols) ;
        }
        connection.close();
    }
)
