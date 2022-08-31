// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license, " badge");
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license, " link");
  const link = "https://choosealicense.com/licenses/mit/";
  console.log(link);
  const licenseURL = link;
  console.log(licenseURL);
  return licenseURL;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseText = `Copyright (c) 2022. All rights reserved.

  Licensed under the ${license} license`;
  //  console.log(licenseText);
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  const readMeText = `# ${data.title} 
  ## Description 
  ${data.discription} 
  ## Installation 
  ${data.install}  
  ## Usage 
  ${data.usage} 
  ## License 
  ${licenseSection} ${licenseLink}
  ## Contributors 
  ${data.contributing} 
  ## GitHub 
  ${data.github} 
  ## LinkedIn 
  ${data.linkedin}`;
  return readMeText;
}

module.exports = generateMarkdown;
