// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js'); // access to generateMarkdown function
console.log(generateMarkdown);



// console.log("working");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
  },
  {
    type: 'input',
    name: 'table',
    message: 'What are the headings in your Table of Contents?'
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'What are the installation instructions for this project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for this project?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines for your project?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions for your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license do you use for this project?',
      choices: [
       'MIT',
       'Apache 2.0',
       'BSD',
       'GNU GPL v2',
       'None'
      ]
  }
  
];

  
  // promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./dist/README.md', data, err => {
  if (err) throw err;
  console.log ('Professional ReadMe generated! Check out README.md to see the output!')
});

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then( function(answers) {
    const data = generateMarkdown(answers);
    console.log("this is the answers variable", answers);
    console.log("this is the template", data);
   writeToFile(data);
  });
}

// Function call to initialize app
init();
