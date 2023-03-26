// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');



// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'gitUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'gitEmail',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'projectName',
    message: "What is your project's name?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['APACHE 2.0', 'BSD 3',  'GPL 3.0', 'MIT', 'None'],
  },
  {
    type: 'input',
    name: 'description',
    message: 'What does your project do?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What is the command to test the program?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'use',
    message: 'What are the requirements for using the repository?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the requirements for contributing to the repository?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
});
}

// Function call to initialize app
init();
