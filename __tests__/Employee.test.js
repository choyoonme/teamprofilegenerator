const Employee = require("../lib/employee");

test("should return an object containing name, id, email, and role", () => {
    const employee = new Employee("John Lennon", "109", "yoko@ono.com", "Employee");

    expect(employee.getName()).toEqual("John Lennon");
    expect(employee.getId()).toEqual("109");
    expect(employee.getEmail()).toEqual("yoko@ono.com");
    expect(employee.getRole()).toEqual("Employee");

});