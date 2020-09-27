// Global Const/Var
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Specifies to require constant module.export to (local Path)=
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of Initial Project questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'pTitle',
            message: 'What is your Projects Name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pDescription',
            message: 'Enter a Project Description? (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                }
                else {
                    console.log('Please enter a description to educate your viewers!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pInstallation',
            message: 'Type how to install the Project. (Suggested)',
        },
        {
            type: 'input',
            name: 'pUsage',
            message: 'Type about the Project usage. (Suggested)',
        },
        {
            type: 'input',
            name: 'pContribution',
            message: 'Please list all Contributors. (Required)',
            validate: contInput => {
                if (contInput) {
                  return true;
                } else {
                console.log('Please list all contributors.');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pTest',
            message: 'Type about the testing instructions for the Project. (Suggested)',
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        },
        {
            type: 'input',
            name: 'gitName',
            message: 'What is your Github userame? (Required)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Github userame!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitAcc',
            message: 'Please insert a link to your Github. (Suggested)',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email. (Suggested)',
        }
    ]);
};

// Function Question .then turning into data 
questions()
 .then(function(data){
    console.log("Calibrating flux capacitors...");
    fs.writeFile("README.md", generateMarkdown(data), function(err) {
        if (err) {
            throw err;
        };
        console.log("Congrats! Your new ReadMe File has been automatically generated. :D");
    });
});