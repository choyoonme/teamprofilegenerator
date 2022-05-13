const inquirer = require("inquirer");

class Manager {
    constructor(name, id, email, officeNumber) {
        //properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
        this.getOfficeNumber = () => {
            console.log(this.officeNumber);
        }
        this.getRole = () => {

            return Manager
        }
    }
};

modules.exports = {
    Manager
}