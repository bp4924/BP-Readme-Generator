const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// user prompts in terminal
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title:",
  },
  {
    type: "input",
    name: "discription",
    message: "Project Description: What does it do, and why?",
  },
  {
    type: "input",
    name: "install",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage: How to start and use this project",
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
    message: "How to contribute to the project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests used:",
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
  {
    type: "input",
    name: "videoDemo",
    message: "Paste a link to your demo video",
  },
];

// write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// prompt user input and pass to generateMarkdown
inquirer.prompt(questions).then((answers) => {
  const fileName = "README.md";
  const readmePageContent = generateMarkdown(answers);

  writeToFile(fileName, readmePageContent);
});
