const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = [];
  let nextprompt = true;

  while (nextprompt) {
    const firstName = prompt ("First name:");
    const lastName = prompt("Last name:");
    let salary = prompt("Salary:")

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);

    nextprompt = confirm("Do You want to add another employee?")
  }

  return employees;
}

const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0
  const employeeTotal = employeesArray.length;

  for  (const employee of employeesArray) {
    totalSalary = employee.salary;

  }

  const avgSal = totalSalary/employeeTotal;
  console.log(`The Average employee salary between ${employeeTotal} employee(s) is $${avgSal}`)

}

const getRandomEmployee = function(employeesArray) {
  const random = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congratulations to ${random.firstName} ${random.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
