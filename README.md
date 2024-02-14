# json-mock-factory

json-mock-factory is a comprehensive tool for generating massive amounts of fake (but realistic) data for testing and development purposes. From user profiles to product details, this package provides an array of functions to simulate real-world data efficiently.

## Installation

To install json-mock-factory, run the following command in your project directory:

```bash
npm install json-mock-factory
```
```bash
yarn add json-mock-factory
```
## Usage
json-mock-factory provides a suite of functions to generate mock data for user profiles and product details. Here's how to use them:

Users
Generate and manipulate user-related data with the following functions:

saveRandomUsers(numUsers, filePath): Generates and saves numUsers unique random user profiles to the specified filePath.

generateRandomEmail(): Generates a single random email address.

generateRandomNames(): Generates a single random name.

generateRandomCompanyName(): Generates a single random company name.

generateRandomNationality(): Generates a single random nationality.

getDesignation(companyName): Gets a company designation based on the provided companyName.

getRandomCompanyDesignation(): Gets a random company designation.

getSalary(designation, experience): Gets a salary based on the provided designation and experience.

getRandomSalary(): Gets a random salary.

getRandomExperience(): Gets a random experience level.

generateRandomAddress(): Generates a single random address.

getRandomStreetName(): Gets a random street name.

getRandomCityName(): Gets a random city name.

getRandomState(): Gets a random state name.

getRandomZipCode(): Gets a random ZIP code.

```javascript 
const { saveRandomUsers, generateRandomEmail, generateRandomNames, generateRandomCompanyName, generateRandomNationality, getDesignation, getRandomCompanyDesignation, getSalary, getRandomSalary, getRandomExperience, generateRandomAddress, getRandomStreetName, getRandomCityName, getRandomState, getRandomZipCode } = require('json-mock-factory');

// Generate 100 random users and save to users.json
saveRandomUsers(100, 'users.json');

// Generate a single random email and name
const email = generateRandomEmail();
const name = generateRandomNames();

console.log(`Generated email: ${email}`);
console.log(`Generated name: ${name}`);

// Generate other user details randomly
const companyName = generateRandomCompanyName();
const nationality = generateRandomNationality();
const designation = getRandomCompanyDesignation();
const {salary, experience} = getSalary(designation, getRandomExperience());
const address = generateRandomAddress();

console.log(`Company name: ${companyName}`);
console.log(`Nationality: ${nationality}`);
console.log(`Designation: ${designation}`);
console.log(`Salary: ${salary} with ${experience} years of experience`);
console.log(`Address: ${JSON.stringify(address)}`);

```
Products
Create product-related mock data efficiently:

saveRandomProducts(numProducts, filePath): Generates and saves numProducts unique random product details to the specified filePath.


```javascript
const { saveRandomProducts } = require('json-mock-factory');

// Generate 200 random products and save to products.json
saveRandomProducts(200, 'products.json');

```
