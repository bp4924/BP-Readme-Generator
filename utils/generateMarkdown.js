const licenseID = {};

// license functions
// badge
function renderLicenseBadge(badge, strength, licenseLink) {
  const licenseBadge = `[![License: ${badge}}](https://img.shields.io/static/v1?label=License&message=${badge}&color=${strength})](${licenseLink})`;
  return licenseBadge;
}

// assign values to licenseID object
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      licenseID.license = license;
      licenseID.link = "mit";
      licenseID.badge = "MIT";
      licenseID.strength = "yellow";
      break;
    case "GNU AGPL":
      licenseID.license = license;
      licenseID.link = "agpl-3.0";
      licenseID.badge = "AGPLv3";
      licenseID.strength = "brightgreen";
      break;
    case "GNU GPL":
      licenseID.license = license;
      licenseID.link = "gpl-3.0";
      licenseID.badge = "GPLv3";
      licenseID.strength = "green";
      break;
    case "GNU LGPL":
      licenseID.license = license;
      licenseID.link = "lgpl-3.0";
      licenseID.badge = "LGPLv3";
      licenseID.strength = "yellowgreen";
      break;
    case "Apache":
      licenseID.license = license;
      licenseID.link = "apache-2.0";
      licenseID.badge = "Apache";
      licenseID.strength = "yellow";
      break;
    case "Mozilla":
      licenseID.license = license;
      licenseID.link = "mpl-2.0";
      licenseID.badge = "Mozilla";
      licenseID.strength = "yellow";
      break;
    case "Boost":
      licenseID.license = license;
      licenseID.link = "bsl-1.0";
      licenseID.badge = "Boost";
      licenseID.strength = "yellow";
      break;
    case "Unlicense":
      licenseID.license = license;
      licenseID.link = "unlicense";
      licenseID.badge = "Unlicense";
      licenseID.strength = "orange";
      break;
    default:
      licenseID.license = license;
      licenseID.link = "";
      licenseID.badge = "";
      licenseID.strength = "red";
  }

  const licenseURL = `https://choosealicense.com/licenses/${licenseID.link}/`;
  return licenseURL;
}

function renderLicenseSection(license, licenseURL) {
  const licenseText = `  
  Licensed under the [${license}](${licenseURL}) license;
  
  Copyright © 2022. All rights reserved.`;
  return licenseText;
}

// questions links
function renderEmailLink(email) {
  const emailLink = `<a href="mailTo: ${email}?subject=Hello!" alt="" >${email}</a>`;
  return emailLink;
}

function renderGithubLink(github) {
  const githubLink = `[${github}](https://github.com/${github})`;
  return githubLink;
}

function renderLinkedInLink(linkedIn) {
  const linkedInLink = `[${linkedIn}](https://linkedin.com/in/${linkedIn})`;
  return linkedInLink;
}

// generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(
    licenseID.badge,
    licenseID.strength,
    licenseLink
  );
  const licenseSection = renderLicenseSection(data.license, licenseLink);

  const emailLink = renderEmailLink(data.email);
  const githubLink = renderGithubLink(data.github);
  const linkedInLink = renderLinkedInLink(data.linkedIn);
  const videoLink = data.videoDemo;

  const readMeText = `${licenseBadge}
  # ${data.title}            
  ---
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)  
  
  ## Description 
      ${data.discription} 
  ## Installation 
      ${data.install}  
  ## Usage 
      ${data.usage} 
  ## License 
      ${licenseSection}
  ## Tests 
      ${data.tests}
  ## Contributing 
      ${data.contributing} 
  
  ## Questions 
  - ### email 
    ${emailLink} 
  - ### GitHub 
    ${githubLink}  
  - ### LinkedIn 
    ${linkedInLink}

  ## Demo Video  
  ${videoLink}`;
  return readMeText;
}

module.exports = generateMarkdown;
