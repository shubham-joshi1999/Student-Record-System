const mysql = require("mysql2") ; 
const connection = mysql.createConnection(
    {
        host : 'localhost',
        database : 'student',
        user : 'user',
        password : 'pass'
    }
)

function getAllstudents ()
    {
        return new Promise(function(resolve,reject)
        {
            connection.query(`SELECT * FROM students`,
            function(err,rows,cols)
            {
                if(err)
                {
                    reject(err) ; 
                }
                else
                {
                    resolve(rows) ;
                }
            })
        })
    }
function addNewStudent(Roll_Number,name,branch,sgpa)
{
    return new Promise(function(resolve,reject)
    {
        `INSERT INTO students (Roll_Number,name,branch,sgpa) VALUES(?,?,?,?)`,
        [Roll_Number,name,branch,sgpa],
        function(err,results)
        {
            if(err)
            {
                reject(err) ;
            }
            else
            {
                resolve() ;
            }
        }
    })
}

exports = module.exports = {
    getAllstudents ,
    addNewStudent
}