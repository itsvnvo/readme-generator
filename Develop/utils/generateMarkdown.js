
//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeChange = "";
  switch (license) {
    case 'Apache': 
      badgeChange = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost': 
      badgeChange = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'BSD': 
      badgeChange = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'Creative Commons': 
      badgeChange = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case 'Eclipse': 
      badgeChange = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break;
  }
  return badgeChange;
}
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkChange = "";
  switch (license) {
    case 'Apache': 
      linkChange = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost': 
      linkChange = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'BSD': 
      linkChange = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'Creative Commons': 
      linkChange = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case 'Eclipse': 
      linkChange = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break;
  }
  return linkChange;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('this is the markdown',data)
  return `
  # ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## ${data.description}
  ## ${data.tableofContent}
  ### ${data.install}
  # Licenses
   ${renderLicenseLink(data.license)}
  ### ${data.contributer}
  ### ${data.test}
  ### ${data.questions}
`;
}

module.exports = generateMarkdown;
