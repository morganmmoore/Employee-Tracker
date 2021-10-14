INSERT INTO department (department_name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal")

INSERT INTO employee_role (title, salary, department_id)
VALUES  ("Salesperson", 80000.00, 1),
        ("Lead Engineer", 150000.00, 2),
        ("Software Engineer", 120000.00, 2),
        ("Account Manager", 160000.00, 3),
        ("Accountant", 125000.00, 3),
        ("Legal Team Lead", 250000.00, 4),
        ("Lawyer", 190000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Karen", "Smith", 1, 1),
        ("Lucy", "Greene", 2, 2),