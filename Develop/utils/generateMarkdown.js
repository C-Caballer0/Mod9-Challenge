// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

} else {
  return "";
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return "\n* [License](#license)\n";
  } else {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project utilizes the ${license} license.`;
  } else {
  return "";
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}

  Hi, i'm ${data.gitUsername} and this is my ReadMe. Give it a read, and if you have any further questions, 
  you can contact me at  ${data.gitEmail}, or visit my page at [${data.gitUsername}](https://github.com/${
    data.gitUsername}/).

## Description: ${data.description}

## Table of Contents 

* How to install

* How to use

* Licensing

* Contribution requirements

* How to test

_______________________________________________________________________________________

~ How to install

To install necessary dependencies, run the following command: ${data.install}


~ How to use

${data.use}

~ Licensing

This program is built under the ${data.license} license

${renderLicenseSection(data.license)}
  
~ Contribution requirements

${data.contribution}

~ How to test

Tests can be ran via the following command: ${data.test}

Enjoy!
`;
}

module.exports = generateMarkdown;
