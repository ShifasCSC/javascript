// document.getElementById("btn2").addEventListener('click',function addEmployee(){
//     const id=document.getElementById("id").value;
//     var name=document.getElementById("name").value;
//     var department=document.getElementById("department").value;
//     var salary=document.getElementById("salary").value;
//     var experience=document.getElementById("experience").value;

//     // Get the existing employees from local storage, or initialize an empty array if none exist
//     let employees = JSON.parse(localStorage.getItem('employees')) || [];

//     let newEmployee={
//         id:id,
//         name:name,
//         department:department,
//         salary:salary,
//         experience:experience

//     };

//     employees.push(newEmployee);

//     localStorage.setItem('employees', JSON.stringify(employees));

//     addEmployee()
    
// }
// )
document.getElementById("btn2").addEventListener('click',()=>{
let employee={
     empId: document.getElementById("id").value,
     empName:document.getElementById("name").value,
     empdep:document.getElementById("designation").value,
     empsal:document.getElementById("salary").value,
     empexp:document.getElementById("experience").value
}
let ob=JSON.stringify(employee)
localStorage.setItem('empId',ob)
    
    
})