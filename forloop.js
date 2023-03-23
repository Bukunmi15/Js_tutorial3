const employees = [
    {
        firstName: 'David',
        department: 'Finance',
        email: 'david@gmail.com'
    },
    {
        firstName: 'Felix',
        department: 'Marketting', 
        email: 'Felix@gmail.com'
    },
    {
        firstName: 'Tobi',
        department: 'Political Science',
        email: 'Tobi@gmail.com'
    }

];

// console.log(employees[2])
// let the console log print out the value in department given 
for (i = 0; i < employees.length ; i++){
    var emp =  employees[i];
    if(emp.department == 'Marketting'){
        console.log(emp.firstName , emp.email);
        console.log('############===#############');
    }
}

let x;
for (x = 0 ; x < employees.length ; x++){
    var worker = employees[x];
    if (worker.department == 'Finance') {
        console.log(worker.firstName , worker.email);
        console.log('#######========##########');
    }
}

let y;
for (y = 0 ; y < employees.length; y++){
    var jobholder = employees[y];
    if(jobholder.department == 'Political Science'){
        console.log(jobholder.firstName , jobholder.email);
        console.log('#########=======#####');
    }
}