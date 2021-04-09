// TODO: Include packages needed for this application
const inquirer = require("./Develop/node_modules/inquirer");
const fs = require("fs").promises;
const generateMarkdown = require('./Develop/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github username?',
      },
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
        name: 'install',
        message: 'Describe how the project should be installed',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What licenses did you use?',
        choices:['Apache','Boost','BSD','Creative Commons','Eclipse','None']
      },
      {
        type: 'input',
        name: 'contributer',
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
    .then((data) => {
      const writeMD = generateMarkdown(data)
      return fs.writeFile('README.md', writeMD)
    })
    .then((data) => {
      console.log('You successfully made a readme!')
    })
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
