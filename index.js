
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const path = require('path');
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teamProfiles.html");

const render = require("./src/team-template");

const teamMembers = [];
const idArray = [];

function teamMenu() {

    function addManager() {
    console.log("Please begin creating your team");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the team manager's name",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter minimum one character";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Please enter the manager's id",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a positive integer greater than zero";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the manager's email",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }  
                return "Please enter a valid email address";
                }
        },
        {
            type: "input",
            name: "managerOfficeNum",
            validate: answer => {
                const pass = answer.match (
                    /^[2-9]\d{2}[2-9]\d{2}\d{4}$/
                ); 
                if (pass) {
                    return true; 
                }
                return "Please enter a valid ten digit phone number";
                }
        },
    ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });  
    
//***************************  This function creates the team profile  ********************************/
function createTeam() {
    
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of member would you like to add to your team?",
            choices: [
                "Engineer",
                "Intern",
                "I am done adding team members for the time being"               
            ]
        }
    ])
    .then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
            }
        });
    }

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engName",
            message: "What is the name of your engineer?",
            validate: answer => {
                if (answer !== "") {
                return true;
        }
        return "Please enter minimum one character.";
        }
    },
        {
            type: "input",
            name: "engId",
            message: "What is your engineer's ID?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    if (idArray.includes(answer)) {
                        return "Apologies, but this ID has already been claimed. Please enter a different set of digits.";
                    }
                    else {
                        return true;
                    }
                }
                return "Please enter a positive integer, zero or above.";
            }
        },
            {
                type: "input",
                name: "engEmail",
                message: "Please enter your engineer's email address.",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
        },
            {
                type: "input",
                name: "engGithub",
                message: "Please enter your engineer's Github contact.",
                validate: answer => {
                    const pass = answer.match(
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/                
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a registered Github account.";
                }
        },
    ])
    .then(answers => {
        const eng = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
        teamMembers.push(eng);
        idArray.push(answers.engID);
        createTeam();
    });  

}
function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the name of your intern?",     
            validate: answer => {
                if (answer !== "") {
                return true;
        }
        return "Please enter minimum one character.";
        }
    },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's ID?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    if (idArray.includes(answer)) {
                        return "Apologies, but this ID has already been claimed. Please enter a different set of digits.";
                    }
                    else {
                        return true;
                    }
                }
                return "Please enter a positive integer, zero or above.";
            }
    },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter your intern's email address.",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
        },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the school your intern is from.",
                validate: answer => {
                    if (answer !== "") {
                    return true;
            }
            return "Please enter minimum one character.";
            }                
        }  
       ])   
       .then(answers => {
           const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
           teamMembers.push(intern);
           idArray.push(answers.internId);
           createTeam();
       });   
}}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
        addManager();
}
    
    teamMenu();

     
    
