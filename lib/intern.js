const Employee = require("./employee");

const internInput = [

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
        name: 'school',
        message: "Enter name of school:"
    }

];

class Intern extends Employee {
    constructor(name, id, email, school) {
        //properties
        super(name, id, email)
        this.school = school;
        this.role = "Engineer";

    };
    //methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }

};

module.exports = { Intern, internInput };