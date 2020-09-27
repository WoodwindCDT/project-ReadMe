// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.pTitle}**
  
  ${data.badge}
  
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
  
  ## Github

  Account: **${data.gitName}**

  More: [Checkout my Work Here!](${data.gitAcc})

  ## Licence
  This Project is licensed via ${data.license}

  `;
}

// Module Export for data
module.exports = generateMarkdown;