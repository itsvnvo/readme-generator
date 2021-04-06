// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your Title of the Project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the project',
      },
      {
        type: 'input',
        name: 'tableofContent',
        message: 'What is in the table of contents?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Describe how the project should be installed',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What licenses did you use?',
      },
      {
        type: 'input',
        name: 'constributer',
        message: 'Who contributed to the project',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What test did you use in your project?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'What questions do the users have?',
      },
    ]);
  };
  

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then(() => console.log('prompted questions'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
