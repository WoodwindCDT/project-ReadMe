// function to generate markdown for README
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
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  
  
  ## Installation
  
          ${data.pInstallation}
  
  ## Usage
  
  ${data.pUsage}
  
  ## Licence
  
  ${data.licence}
  
  ## Contributors
  
  ${data.contributing}
  
  ## Test
  
  ${data.pTest}
  
  
  ## Repository
  
  - [Project Repo](${data.gitRepo})
  
  ## GitHub
  `;
}

module.exports = generateMarkdown;