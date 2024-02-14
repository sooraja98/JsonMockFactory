const fs = require("fs");
const generateUniqueRandomUsers = require("./src/user-functions/generateUniqueRandomUsers");
const generateUniqueRandomProducts = require("./src/product-functions/generateUniqueRandomProducts");
const generateRandomEmail = require("./src/user-functions/emailGenerating");
const generateRandomNames = require("./src/user-functions/userNameGenerating");
const generateRandomCompanyName = require("./src/userUtils/userCompanyName");
const generateRandomNationality = require("./src/userUtils/nationality");
const {
  getDesignation,
  getRandomCompanyDesignation,
} = require("./src/userUtils/userDesignation");
const {
  getSalary,
  getRandomSalary,
  getRandomExperience,
} = require("./src/userUtils/userSalary");
const {
  generateRandomAddress,
  getRandomStreetName,
  getRandomCityName,
  getRandomState,
  getRandomZipCode,
} = require("./src/userUtils/userAddress");
const saveRandomUsers = (numUsers, filePath) => {
  const userData = generateUniqueRandomUsers(numUsers);
  const userJsonData = JSON.stringify(userData, null, 2);
  fs.writeFileSync(filePath, userJsonData);
  console.log(
    `Generated ${numUsers} unique random user records and saved to ${filePath}`
  );
};
const saveRandomProducts = (numProducts, filePath) => {
  const productData = generateUniqueRandomProducts(numProducts);
  const productJsonData = JSON.stringify(productData, null, 2);
  fs.writeFileSync(filePath, productJsonData);
  console.log(
    `Generated ${numProducts} unique random products and saved to ${filePath}`
  );
};

module.exports = {
  saveRandomUsers,
  saveRandomProducts,
  generateRandomEmail,
  generateRandomNames,
  generateRandomCompanyName,
  generateRandomNationality,
  getDesignation,
  getRandomCompanyDesignation,
  getSalary,
  getRandomSalary,
  getRandomExperience,
  generateRandomAddress,
  getRandomStreetName,
  getRandomCityName,
  getRandomState,
  getRandomZipCode,
};
