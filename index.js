const inquirer = require("inquirer");
const template = require("./src/template")
const fs = require("fs");

const { Manager, managerInput } = require("./lib/manager");
const { Engineer, engineerInput } = require("./lib/engineer");
const { Intern, internInput } = require("./lib/intern")

let teamArray = [];

const questions = () => { managerPrompts() }
    //prompt to determine employee role 
const employeePrompt = () => {
        inquirer.prompt([{
                type: "list",
                name: "role",
                message: "Select role of employee:",
                choices: [
                    { name: "Manager", value: "addManager" },
                    { name: "Engineer", value: "addEngineer" },
                    { name: "Intern", value: "addIntern" },
                    { name: "complete", value: "complete" }
                ]
            }])
            .then(answer => {
                //prompt set of questions based on previous selection
                if (answer.employeeRole === "addManager") {
                    managerPrompts();
                };
                if (answer.employeeRole === "addEngineer") {
                    engineerPrompts();
                };
                if (answer.employeeRole === "addIntern") {
                    internPrompts();
                };
                if (answer.complete === "complete") {
                    //render input to HTML
                    let renderHTML = template(teamArray)
                        //writes HTML file
                    fs.writeFile("./index.html");
                }
            })
    }
    //prompts if user selects Manager
const managerPrompts = () => {
        inquirer.prompt(managerInput)
            .then((answers) => {
                answers = new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.officeNumber)
                teamArray.push(answers);
                return employeePrompt();
            })
    }
    //prompts if user selects Engineer
const engineerPrompts = () => {
        inquirer.prompt(engineerInput)
            .then((answers) => {
                answers = new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                )
            })
    }
    //prompts if use selects Intern
const internPrompts = () => {
    inquirer.prompt(internInput)
        .then((answers) => {
            answers = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            )
        })
}

questions();


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

const managerInput = [

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
        name: 'officeNumber',
        message: "Enter office number:"
    }

];