const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// terminal prompts
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title:",
  },
  {
    type: "input",
    name: "discription",
    message: "Project Description:",
  },
  {
    type: "input",
    name: "install",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage:",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "GNU AGPL",
      "GNU GPL",
      "GNU LGPL",
      "Apache",
      "Mozilla",
      "MIT",
      "Boost",
      "Unlicense",
    ],
    message: "Choose a license",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing:",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "linkedIn",
    message: "Enter your LinkedIn Username",
  },
];

// write README file
function writeToFile(fileName, answers) {
  console.log(answers);
  fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// TODO: Create a function to initialize app
//function init() {
//  console.log("init function");
//}

// Function call to initialize app
//init();

inquirer.prompt(questions).then((answers) => {
  const fileName = "README.md";
  const readmePageContent = generateMarkdown(answers);

  writeToFile(fileName, readmePageContent);
});
