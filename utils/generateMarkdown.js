let section = "";

const sections = [
  "Description",
  "Contents",
  "Installation",
  "Usage",
  "License",
  "Contributing",
  "Tests",
  "Questions",
];

// TODO: Create a function that returns a license badge based on which license is passed in'
// If there is no license, return an empty string
function renderLicenseBadge(license, licenseLink) {
  const licenseBadge = `[<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104" height="20" role="img" aria-label="License: ${license}"><title>License: ${license}</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="104" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="53" height="20" fill="#4c1"/><rect width="104" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="785" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="470">${license}</text><text x="785" y="140" transform="scale(.1)" fill="#fff" textLength="470">${license}</text></g></svg>](${licenseLink})`;
  return licenseBadge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license, " link");
  let urlTag;

  switch (license) {
    case "MIT":
      urlTag = "mit";
      break;
    case "GNU AGPL":
      urlTag = "agpl-3.0";
      break;
    case "GNU GPL":
      urlTag = "gpl-3.0";
      break;
    case "GNU LGPL":
      urlTag = "lgpl-3.0";
      break;
    case "Apache":
      urlTag = "apache-2.0";
      break;
    case "Mozilla":
      urlTag = "mpl-2.0";
      break;
    case "Boost":
      urlTag = "bsl-1.0";
      break;
    case "Unlicense":
      urlTag = "unlicense";
    default:
      urlTag = "";
  }

  const licenseURL = `https://choosealicense.com/licenses/${urlTag}/`;
  console.log(licenseURL);
  return licenseURL;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseURL) {
  const licenseText = `
  
  Licensed under the [${license}](${licenseURL}) license;
  
  Copyright © 2022. All rights reserved.`;
  //  console.log(licenseText);
  return licenseText;
}

function renderEmailLink(email) {
  const emailLink = `<a href="mailTo: ${email}?subject=Hello!" alt="" >${email}</a>`;
  console.log(emailLink);
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

function renderTableOfContents(sections) {
  for (let i = 0; i < sections.length; i++) {
    section += ` - [${sections[i]}](#${sections[i].toLowerCase()})`;
    console.log(section);
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license, licenseLink);
  const licenseSection = renderLicenseSection(data.license, licenseLink);

  const emailLink = renderEmailLink(data.email);
  const githubLink = renderGithubLink(data.github);
  const linkedInLink = renderLinkedInLink(data.linkedIn);
  const tableOfContentsList = renderTableOfContents(sections);

  const readMeText = `${licenseBadge}
  # ${data.title}            
  ---
  ## Table of Contents
  
  ======

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
