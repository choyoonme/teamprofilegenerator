const inquirer = require("inquirer");

class Engineer {
    constructor(name, id, email, github) {
        //properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
        this.getGithub = () => {
            console.log(this.github);
        }
        this.getRole = () => {
            return Engineer
        }
    }
};