const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        //properties
        this.name = name;
        this.id = id;
        this.email = email;
        //methods
        this.getName = () => {
            console.log(this.name);
        }
        this.getId = () => {
            console.log(this.id);
        }
        this.getEmail = () => {
            console.log(this.email);
        }
        this.getRole = () => {
            return Employee
        }
    }
};

modules.exports = {
    Employee
}