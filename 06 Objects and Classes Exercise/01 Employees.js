class Employee{
    constructor(employeeName){
       this.employeeName = employeeName;
       this.employeeNumber=this.employeeName.length;
    }
}

function createEmployeeList(input) {

    const employeesList = input.reduce((acc,curr)=>{
        const employee = new Employee(curr);
        acc.push(employee);
        return acc;
    },[]);
    

    employeesList.forEach(emp => {
        typeof emp;
        console.log(`Name: ${emp.employeeName} -- Personal Number: ${emp.employeeNumber}`);
    });

}

createEmployeeList([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);