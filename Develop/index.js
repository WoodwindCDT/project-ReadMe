// Global Const/Var
// Const fs required by node to enable writeFile
const fs = require('fs');
const inquirer = require('inquirer');

// Array of Initial Project questions for user
const questions = () => {
    console.log(`
    =================
    Project Time!
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'p-title',
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
            name: 'p-description',
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
            name: 'p-installation',
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
            name: 'p-usage',
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
            name: 'p-contribution',
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
            name: 'p-test',
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
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a License to the Project?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'Choose a License.',
            choices: ['MIT', 'Apache', 'GNU', 'ES6', 'Unlicense ']
        }
    ]);
};

// Function to write README file
function writeToFile(fileName, data) {

}

// Function to initialize program
function init() {

}

// Function call to initialize program
init();
