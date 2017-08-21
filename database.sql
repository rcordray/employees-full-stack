CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(80) NOT NULL,
  lastName VARCHAR(120) NOT NULL,
  jobTitle VARCHAR (120) NOT NULL,
  salary VARCHAR(10) NOT NULL
  );

INSERT INTO employees (firstname, lastname, jobtitle, salary)
VALUES ('Bobby', 'Cordray', 'Computer Programmer', 140000),
('Frank', 'Tankerton', 'Bartender', 80000);