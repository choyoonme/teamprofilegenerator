const inquirer = require("inquirer");
// const fs = require("fs");

// const Employee = require('./lib/employee');
// const Engineer = require('./lib/engineer');
// const Manager = require('./lib/manager');
// const Intern = require('./lib/intern')

// let teamProfiles = [];

// function questions() {
inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Enter your name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "If you are are Manager, enter your office phone number:"
        },
        {
            type: "input",
            name: "github",
            message: "If you are an Engineer, enter your GitHub username:"
        },
        {
            type: "input",
            name: "intern",
            message: "If you an Intern, enter the name of your school:"
        }
    ])
    .then((answer) => {


    });
//prompts if user selects Engineer
// .prompts.next({

// })
//prompts if user selects Manager
//prompts if user selects Inter
// };