class Employee {
    constructor(name) {
        this.name = name;
    }

    getName() {
        let out = "";
        for (let i = 0; i < this.name; i++) {
            out += "name ";
        }
        return out;
    }
}

module.exports = Employee;