//generate to html
const generateHTML = require("./src/generateHTML");
//node module files
const inquirer = require("inquirer");
const fs = require("fs");
//profiles for each role
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");


const questions = [{
        type: "input",
        name: "name",
        message: "Enter name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID:"

    }, {
        type: "input",
        name: "email",
        message: "Enter email address:"
    },
    {
        type: "list",
        name: "role",
        message: "Enter employee role:",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ]
    },
    {
        when(answers) {
            return answers.role === "Engineer"
        },
        type: "input",
        name: "github",
        message: "Enter GitHub username:"
    }, {
        when(answers) {
            return answers.role === "Intern"
        },
        type: "input",
        name: "school",
        message: "Enter name of school:"
    },
    {
        when(answers) {
            return answers.role === "Manager"
        },
        type: "input",
        name: "officeNumber",
        message: "Enter office number:"
    }

];
inquirer.prompt(questions).then((answers) => {

    const output = generateHTML(answers);

    //if employee role is engineer then prompt engineer questions
    fs.writeFile("./dist/index.html", output, { encoding: "utf8" }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Done!");
        }
    })
});