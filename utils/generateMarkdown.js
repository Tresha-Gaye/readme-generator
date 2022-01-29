// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'GNU GPL v2':
      badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
      break;
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;
    case 'None':
    badge = "";
      break;
    };
    return badge; 
};

  // if(license === 'MIT') {
  //   return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  // } 
  // if(license === 'Apache 2.0') {
  //   return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  // } 
  // if(license === 'GNU GPL v2') {
  //   return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  // }
  // if (license === 'BSD') {
  //   return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  // }
  //   else {
  //     return "";
  // }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(badge) {
  console.log(badge);
  let link = badge;
  switch (badge) {
    case '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]':
      link += '(https://opensource.org/licenses/MIT)';
      break;
    case '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]':
      link += '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]':
      link += '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]':
      link += '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      link = "";
      break;
  };
  console.log(link);
  return link;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = ""  
  if (license != "") {
    var licenseBadge = renderLicenseBadge(license);
    licenseLink = renderLicenseLink(licenseBadge);
    return licenseLink;
  } else {
    return licenseLink;
  };
};

// call renderlicencebadge functinoon
// call renderlicencelink function
// return a header for license section of README if license data available, if not, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  # Description
  ${data.description}

  # Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions
 
  # Installation
  ${data.instructions}

  # Usage
  ${data.usage}

  # License
  
  ${renderLicenseSection(data.license)}

  # Contributing
  ${data.contribution}

  # Tests
  ${data.test}

`;
}

module.exports = generateMarkdown;
