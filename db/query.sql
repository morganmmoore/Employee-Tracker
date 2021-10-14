SELECT department.department_name AS department, employee_role.title
FROM employee_role
LEFT JOIN department
ON employee_role.department_id = department.id
ORDER BY department.department_name;

SELECT employee_role.title AS 
FROM employee
LEFT JOIN employee_role
ON employee.role_id = employee_role.id
ORDER BY employee_role.?;