// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge =
    "Badges? We don't need no stinking " + license + " badges!!";
  return licenseBadge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license, " link");
  let urlTag;

  switch (license) {
    case "MIT License":
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
  }

  const licenseURL = `https://choosealicense.com/licenses/${urlTag}/`;
  console.log(licenseURL);
  return licenseURL;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseURL, licenseBadge) {
  const licenseText = `${licenseBadge} 

  Licensed under the [${license}](${licenseURL}) license;
  
  Copyright © 2022. All rights reserved.`;
  //  console.log(licenseText);
  return licenseText;
}

function renderEmailLink(email) {
  const emailLink = `[${email}](https://${email})`;
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
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(
    data.license,
    licenseLink,
    licenseBadge
  );
  const emailLink = renderEmailLink(data.email);
  const githubLink = renderGithubLink(data.github);
  const linkedInLink = renderLinkedInLink(data.linkedIn);

  const readMeText = `# ${data.title} 
  ---
  ## Description 
  ${data.discription} 
  ## Installation 
  ${data.install}  
  ## Usage 
  ${data.usage} 
  ## License 
  ${licenseSection}
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
