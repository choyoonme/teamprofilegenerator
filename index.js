const Employee = require('./lib/employee');

const writer = require('./src/template.js');

console.log(writer("Turtles Rock!", new Employee(5).getName()));