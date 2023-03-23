let employee = {firstName: 'David', lastName: 'Bukunmi', age: 20}

// console.log(employee.firstName);
// console.log(employee['firstName']);

// console.log(employee.firstName + ' ' + employee.lastName + ' is a professional software engineer and hes ' + employee.age + ' years old');



// objects inside object 
let students = {firstName: 'Alayeluwa', age: 34 , nickName: 'Suco' ,
                department: {firstName: 'johnson', age : 83 , nickName: 'sido',
                head:{firstName: 'Clinton', age: 32 , nickName: 'sergio clinton'}}}

console.log(students.firstName);
console.log(students.department.age);
console.log(students.department.head.nickName);


 