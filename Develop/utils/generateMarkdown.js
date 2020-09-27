// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.pTitle}**

  ![License](https://img.shields.io/badge/License-${data.license}-purple.svg)
  
  ## Description 
  
  ${data.pDescription}
  
  ## Table of contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Credits](#Credits)
  - [Test](#Test)
  - [GitHub Info](#GitHub) 
  
  
  ## Installation
  
  > ${data.pInstallation}
  
  ## Usage
  
  > ${data.pUsage}

  ## Credits
  
  > ${data.pContribution}
  
  ## Test
  
  > ${data.pTest}
  
  ## Questions? Contact Me Here!

  Account: **${data.gitName}**

  Email: ${data.email}

  More: [Checkout my Work](${data.gitAcc})

  ## Licence
  This Project is licensed via ${data.license}

  `;
}

// Module Export for data
module.exports = generateMarkdown;