const urlTag = {};

// license badge
function renderLicenseBadge(badge, strength, licenseLink) {
  const licenseBadge = `[![License: ${badge}}](https://img.shields.io/static/v1?label=License&message=${badge}&color=${strength})](${licenseLink})`;

  return licenseBadge;
}

// license functions
function renderLicenseLink(license) {
  console.log(license, " link");

  switch (license) {
    case "MIT":
      urlTag.license = license;
      urlTag.link = "mit";
      urlTag.badge = "MIT";
      urlTag.strength = "yellow";
      break;
    case "GNU AGPL":
      urlTag.license = license;
      urlTag.link = "agpl-3.0";
      urlTag.badge = "AGPLv3";
      urlTag.strength = "brightgreen";
      break;
    case "GNU GPL":
      urlTag.license = license;
      urlTag.link = "gpl-3.0";
      urlTag.badge = "GPLv3";
      urlTag.strength = "green";
      break;
    case "GNU LGPL":
      urlTag.license = license;
      urlTag.link = "lgpl-3.0";
      urlTag.badge = "LGPLv3";
      urlTag.strength = "yellowgreen";
      break;
    case "Apache":
      urlTag.license = license;
      urlTag.link = "apache-2.0";
      urlTag.badge = "Apache";
      urlTag.strength = "yellow";
      break;
    case "Mozilla":
      urlTag.license = license;
      urlTag.link = "mpl-2.0";
      urlTag.badge = "Mozilla";
      urlTag.strength = "yellow";
      break;
    case "Boost":
      urlTag.license = license;
      urlTag.link = "bsl-1.0";
      urlTag.badge = "Boost";
      urlTag.strength = "yellow";
      break;
    case "Unlicense":
      urlTag.license = license;
      urlTag.link = "unlicense";
      urlTag.badge = "Unlicense";
      urlTag.strength = "orange";
      break;
    default:
      urlTag.license = license;
      urlTag.link = "";
      urlTag.badge = "";
      urlTag.strength = "red";
  }

  const licenseURL = `https://choosealicense.com/licenses/${urlTag.link}/`;

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
  console.log(githubLink);
  return githubLink;
}

function renderLinkedInLink(linkedIn) {
  const linkedInLink = `[${linkedIn}](https://linkedin.com/in/${linkedIn})`;
  console.log(linkedInLink);
  return linkedInLink;
}

// generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(
    urlTag.badge,
    urlTag.strength,
    licenseLink
  );
  const licenseSection = renderLicenseSection(data.license, licenseLink);

  const emailLink = renderEmailLink(data.email);
  const githubLink = renderGithubLink(data.github);
  const linkedInLink = renderLinkedInLink(data.linkedIn);

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
    ${linkedInLink}`;
  return readMeText;
}

module.exports = generateMarkdown;
