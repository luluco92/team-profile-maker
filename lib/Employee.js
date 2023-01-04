class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name.trim();
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email.trim();
  }
  getRole() {
    return 'Employee';
  }
}

// const Engineer = new Employee("Engineer", 7);

// Employee.getName();

module.exports = Employee;

