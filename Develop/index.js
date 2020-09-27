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
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to inform the user how to install the Project?',
            default: true
        },
        {
            type: 'input',
            name: 'pInstallation',
            message: 'Type how to install the Project.',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to inform the user about the usage for the Project?',
            default: true
        },
        {
            type: 'input',
            name: 'pUsage',
            message: 'Type about the Project usage.',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to inform the user about the contribution guidelines for the Project?',
            default: true
        },
        {
            type: 'input',
            name: 'pContribution',
            message: 'Type about the contribution guidelines for the Project.',
            when: ({ confirmContribution }) => {
                if (confirmContribution) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to inform the user about the testing instructions for the Project?',
            default: true
        },
        {
            type: 'input',
            name: 'pTest',
            message: 'Type about the testing instructions for the Project.',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                  return true;
                } else {
                  return false;
                }
            }
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
            name: 'gitRepo',
            message: 'Please insert a link to your Github. (Required)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                }
                else {
                    console.log('Please enter a link to your Github!');
                    return false;
                }
            }
        }
    ]);
};

questions()
 .then(function(data){
     console.log(data);
    fs.writeFile("README.md", generateMarkdown(data), function(err) {
        if (err) {
            throw err;
        };
        console.log("Congrats! Your new ReadMe File has been automatically generated. :D");
    });
});