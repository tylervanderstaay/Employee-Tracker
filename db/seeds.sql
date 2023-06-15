INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Exec");
      
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Supervisor",100000, 1),
       ("Sales Normalvisor",80000, 1),
       ("Head Engineer",150000, 2),
       ("CIO",250000, 4),
       ("CIO's Son",190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Doe", 1, null),
       ("John", "Ron", 2, 1),
       ("Carol", "Ferrel", 3, null),
       ("Chris", "Mist", 5, 3),
       ("Morgan", "Jones", 4, null),
       ;
