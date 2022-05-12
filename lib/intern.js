const inquirer = require("inquirer");

class Intern {
    constructor(name, id, email, school) {
        //properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
        this.getSchool = () => {
            console.log(this.school)
        }
        this.getRole = () => {
            return Intern
        }
    }
};