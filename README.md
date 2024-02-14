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



1)Generate and manipulate user-related data with the following functions:

2)saveRandomUsers(numUsers, filePath): Generates and saves numUsers unique random user profiles to the specified filePath.

3)generateRandomEmail(): Generates a single random email address.

4)generateRandomNames(): Generates a single random name.

5)generateRandomCompanyName(): Generates a single random company name.

6)generateRandomNationality(): Generates a single random nationality.

7)getDesignation(companyName): Gets a company designation based on the provided companyName.

8)getRandomCompanyDesignation(): Gets a random company designation.

9)getSalary(designation, experience): Gets a salary based on the provided designation and experience.

10)getRandomSalary(): Gets a random salary.

11)getRandomExperience(): Gets a random experience level.

12)generateRandomAddress(): Generates a single random address.

13)getRandomStreetName(): Gets a random street name.

14)getRandomCityName(): Gets a random city name.

15)getRandomState(): Gets a random state name.

16)getRandomZipCode(): Gets a random ZIP code.

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
