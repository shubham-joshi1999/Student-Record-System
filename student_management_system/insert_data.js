const mysql = require('mysql2') ; 

const insert = {
    Roll_Number : parseInt(process.argv[2]),
    name :  process.argv[3],
    branch : process.argv[4],
    sgpa : parseFloat(process.argv[5])
}
const connection = mysql.createConnection({
    host : 'localhost' ,
    database : 'student',
    user : 'user',
    password : 'pass' 
})

connection.query(
    `INSERT INTO students (Roll_Number , name , branch,sgpa) VALUES (
         ${insert.Roll_Number} , 
        ' ${insert.name}' ,
        '${insert.branch}',
         ${insert.sgpa}
    )`,
    function(err , results)
    {
        if(err)
        {
            console.error(err) ;
        }
        else
        {
            console.log(results) ;
            console.log("Successfully inserted")
        }
        connection.close() ; 
    }
)