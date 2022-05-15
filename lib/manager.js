const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        //properties
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    };
    //methods
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;