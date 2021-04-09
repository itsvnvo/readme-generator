
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
    case 'None':
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
      linkChange = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'Boost':
      linkChange = 'https://www.boost.org/LICENSE_1_0.txt'

      break;
    case 'BSD':
      linkChange = 'https://opensource.org/licenses/BSD-3-Clause'

      break;
    case 'Creative Commons':
      linkChange = 'https://creativecommons.org/publicdomain/zero/1.0/'

    case 'Eclipse':
      linkChange = 'https://opensource.org/licenses/EPL-1.0'

      break;
    case 'None':
      linkChange = ''
  
       break;
  }
  return linkChange;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let sectionChange = "";
  switch (license) {
    case 'Apache':
      sectionChange = 'Apache'
      break;
    case 'Boost':
      sectionChange = 'Boost'
      break;
    case 'BSD':
      sectionChange = 'BSD'
      break;
    case 'Creative Commons':
      sectionChange = 'Creative Commons'
      break;
    case 'Eclipse':
      sectionChange = 'Eclipse'
      break;
    case 'None':
      sectionChange = 'None'
      break;
    
  }
  return sectionChange;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('this is the markdown', data)
  return `
  # ${renderLicenseBadge(data.license)}

  # ${data.title}
  ---
  ## Description
  ${data.description}



---
  ## Table of content
  
* [Install](#install)

* [Licenses](#licenses)

* [Contributer](#contributer)

* [Test](#test)

* [Questions](#questions)
  --- 
<a name="install"/>
  ### Install
  ${data.install}



  ---
<a name="licenses"/>
  ### Licenses
   ${renderLicenseLink(data.license)}
   You are using ${renderLicenseSection(data.license)} license!

   ---
   <a name="contributer"/>
  ### Contributers
  ${data.contributer}

  ---
  <a name="test"/>
  ### Test
  ${data.test}

  
  ---
  <a name="questions"/>
  ### Questions
  ${data.questions}
 * Github profile: https://github.com/${data.githubUser}
 * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
