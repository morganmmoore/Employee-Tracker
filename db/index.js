const inquirer = require('inquirer');
const fs = require('fs');

const allEmployees = [];

init = () => {
    mainPrompt();
}

mainPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select one of the following: ',
            name: 'main',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
    ]) .then((data) => {
        if (data.main === 'View all departments') {
            //view all departments code
        } else if (data.main === 'View all roles') {
            //view all roles code
        } else if (data.main === 'View all employees') {
            //view all employees code
        } else if (data.main === 'Add a department') {
            addDepartment();
        } else if (data.main === 'Add a role') {
            addRole();
        } else if (data.main === 'Add an employee') {
            addEmployee();
        } else if (data.main === 'Update an employee role') {
            updateRole();
        }
    })
}

addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department'
        },
    ]) .then((data) => {
        const department = new Department(somethinghere);
        allEmployees.push(department);
        mainPrompt();
    })
}

addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the role name?',
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'What is the department for the role?',
            name: 'roleDepartment'
        },
    ]) .then((data) => {
        const role = new Role(somethinghere);
        allEmployees.push(role);
        mainPrompt();
    })
}