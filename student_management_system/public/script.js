$(function()
{
    let inp_roll = $('#Roll_Number')
    let inp_name = $('#name') 
    let inp_branch = $('#branch')
    let inp_sgpa = $('#sgpa') 
    let btn_submit = $('#submit')
    let tbl_person = $('#persons')
    console.log("Before fxn")
    function refresh_table(students)
    {
        console.log(students) ; 
        console.log("Refresh_table")
        tbl_person.empty() ; 
        tbl_person.append (
            `<tr>
            <th>S.No</th>
            <th>Roll_Number</th>
            <th>Name</th>
            <th>Branch</th>
            <th>SGPA</th>
        </tr>`
        )
        console.log("Before for")
        for(student of students)
        {
            tbl_person.append(`
            <tr>
            <td>${student.SNo}</td>
            <td>${student.Roll_Number} </td>
            <td>${student.name}</td>
            <td> ${student.branch}</td>
            <td>${student.sgpa}</td>
        </tr>
            `)
        }console.log("After for")
    }
        $.get('/students/studentlist',function(data)
        {
           // console.log("Inside get") ;
           // console.log(data) ;
            refresh_table(data) ;
        })
        btn_submit.click(function()
            {
              //  console.log("click") ; 
                $.post('/students/studentlist',
                {
                    Roll_Number : inp_roll.val(),
                    name  : inp_name.val(),
                    branch : inp_branch.val(),
                    sgpa : inp_sgpa.val()
                },
                function(data)
                {
                   // console.log("In post")
                   // console.log(data)
                    refresh_table(data)
                })

            }
        )
    }
)

