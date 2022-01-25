// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');

// const generateMarkdown = require('./utils/generateMarkdown.js');

// fs.writeFile('README.md', generateMarkdown, err => {
// if (err) throw err;

// console.log ('Professional ReadMe generated! Check out README.md to see the output!')

// });


// console.log("working");
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
    ]);
  };
  
  promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
