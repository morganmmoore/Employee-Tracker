INSERT INTO department (department_name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal")

INSERT INTO employee_role (title, salary, department_id)
VALUES  ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 2),
        ("Software Engineer", 120000, 2),
        ("Account Manager", 160000, 3),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Karen", "Smith", 1),
        ("Lucy", "Greene", 2),
        ("John", "Woodard", 4),
        ("Bob", "Hope", 2),
        ("Sally", "Miller", 3)

UPDATE `employee_db`.`employee` 
SET `manager_id` = '1' 
WHERE (`id` > '1');