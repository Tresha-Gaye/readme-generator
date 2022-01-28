// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } 
  if(license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  if(license === 'GNU GPL v2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
    else {
      return "";
  }

}

// use a switch case 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// links to the licence
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// call renderlicencebadge
// call render licence link
// return a header taht says licence- <h2> if no licence return an empty string, includes header and body before badge and link
// all the 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Description
  ${data.description}

  # Table of Contents
  ${data.description}
  // can be hardcoded - using those heading below
 
  # Installation
  ${data.instructions}

  # Usage
  ${data.usage}
  # License
  
  ${renderLicenseSection()}

  # Contributing
  ${data.contribution}

  # Tests
  ${data.test}

  # Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
