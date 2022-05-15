class Employee {
    constructor(name, id, email, role) {
        //properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;

    };
    //methods
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

};

module.exports = Employee;