const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: '123coding456!',
        database: 'employee_db'
      },
      console.log(`Connected to the employees_db database.`)
);

init = () => {
    mainPrompt();
}

mainPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select one of the following: ',
            name: 'main',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Done'],
        },
    ]) .then((data) => {
        switch(data.main) {
            case 'View all departments':
                showDepartments();
                break;
            case 'View all roles':
                showRoles();
                break;
            case 'View all employees':
                showEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateRole();
                break;
            case 'Done':
                return;
        }
    })
}

addDepartment = () => {
    db.query(`SELECT department_name AS "Department" FROM department`, (err, res) => {
        if (err) throw err;

        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the department?',
                name: 'dept'
            },
        ]) .then((data) => {
            db.query(`INSERT INTO department(department_name) VALUES( ? )`, data.dept)
            mainPrompt();
        })
    })
}   

addRole = () => {
    db.query(`SELECT * FROM department`, function (err, res) {
        if (err) throw err;
        
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
            {
                type: 'list',
                message: 'Select the department',
                name: 'dept',
                choices: function () {
                    const choiceArr = data[1].map(choice => choice.department_name);
                    return choiceArr;
                },
            }
        ]) .then((data) => {
                db.query(`INSERT INTO employee_role(title, salary, department_id)
                VALUES ("${data.role}", "${data.salary}",
                (SELECT id FROM departments WHERE department_name = "${data.dept}"));`
                )
            mainPrompt();
        })
    })
}

addEmployee = () => {
    db.query(`SELECT * from roles; SELECT CONCAT (employee.first_name," ",employee.last_name) AS full_name FROM employee`)
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee\'s first name?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the employee\'s last name?',
            name: 'lastName'
        },
        {
            type: 'list',
            message: 'What is the employee\'s role?',
            name: 'employeeRole',
            choices: function () {
                const choiceArr = results[0].map(choice => choice.title);
                return choiceArr;
            }
        },
        {
            type: 'input',
            message: 'Who is the employee\'s manager?',
            name: 'employeeManager'
        },
    ]) .then((data) => {
        db.query(
            `INSERT INTO employee(first_name, last_name, role_id, manager_id) 
            VALUES(?, ?, (SELECT id FROM employee_role WHERE title = ?),
            (SELECT id FROM (SELECT id FROM employee_role WHERE CONCAT(first_name," ",last_name) = ? ) AS emptable))`, [data.first_name, data.last_name, data.role, data.manager]
        )
        mainPrompt();
    })
}

app.use((req, res) => {
    res.status(404).end();
  });
  
app.listen(PORT, () => {
console.log(`Server running on port http://localhost:${PORT}`);
});

init();