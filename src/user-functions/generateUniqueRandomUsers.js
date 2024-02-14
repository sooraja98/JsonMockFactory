const fs = require("fs");
const { generateRandomName } = require("../userUtils/userName");
const getRandomCompanyName = require("../userUtils/userCompanyName");
const {getDesignation} = require("../userUtils/userDesignation");
const {getSalary} = require("../userUtils/userSalary");
const {generateRandomAddress} = require("../userUtils/userAddress");
const generateGmailAddress = require("../userUtils/emailCreating");
const getDepartmentFromDesignation = require("../userUtils/department");
const getRandomNationality = require("../userUtils/nationality");

const generateRandomUser = (id) => {
  const { firstName, lastName, gender } = generateRandomName();
  const company = getRandomCompanyName();
  const designation = getDesignation(company);
  const { salary, experience } = getSalary(company, designation);
  const address = generateRandomAddress();
  const nationality = getRandomNationality();
  const gmail = generateGmailAddress(firstName, lastName);
  const department = getDepartmentFromDesignation(designation);
  return {
    id: id,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    nationality: nationality,
    gmail: gmail,
    company: company,
    designation: designation,
    department: department,
    salary: salary,
    experience: experience,
    address: address,
  };
};

const generateUniqueRandomUsers = (num) => {
  const users = new Set();
  let counter = 0;
  let totalGenerated = 0;

  while (totalGenerated < num) {
    const user = generateRandomUser(++counter);
    const uniqueIdentifier = `${user.firstName}_${user.lastName}_${user.id}`;

    if (!users.has(uniqueIdentifier)) {
      users.add(JSON.stringify(user));
      totalGenerated++;
    }

    if (totalGenerated % 1000 === 0 || totalGenerated === num) {
      console.log(`Generated ${totalGenerated} unique random users.`);
    }
  }

  return Array.from(users).map(JSON.parse);
};

module.exports = generateUniqueRandomUsers;
