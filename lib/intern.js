const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        //properties
        super(name, id, email, role)
        this.school = school;

    };
    //methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }

};

module.exports = Intern;