const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        //properties
        super(name, id, email, role)
        this.github = github;
    };
    //methods
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }

};

module.exports = Engineer;