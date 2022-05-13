const Employee = require("./employee");

const managerInput = [

    {
        type: 'input',
        name: 'name',
        message: "Enter name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter employee ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter office number:"
    }

];

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //properties
        this.getOfficeNumber = officeNumber;
        this.role = "Manager";
    };
    //methods
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = { Manager, managerInput };