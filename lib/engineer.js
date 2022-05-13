const Employee = require("./employee");

const engineerInput = [

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
        name: 'github',
        message: "Enter GitHub Username:"
    }

];

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //properties
        super(name, id, email)
        this.github = github;
        this.role = "Engineer";

    };
    //methods
    getGitHub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }

};

module.exports = { Engineer, engineerInput };