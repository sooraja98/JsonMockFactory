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
// Import the required functions from the json-mock-factory package
const { 
  generateRandomEmail, 
  generateRandomNames, 
  generateRandomCompanyName, 
  generateRandomNationality, 
  getDesignation, 
  getRandomCompanyDesignation 
} = require('json-mock-factory');

// Generate a single random email and name
const email = generateRandomEmail();
const name = generateRandomNames();

// Output the generated email and name
console.log(`Generated email: ${email}`);
console.log(`Generated name: ${name}`);

// Generate a random company name and nationality
const companyName = generateRandomCompanyName();
const nationality = generateRandomNationality();

// Get a specific designation for the generated company name
const specificDesignation = getDesignation(companyName);

// Get a random company designation without specifying a company
const randomDesignation = getRandomCompanyDesignation();

// Output the generated company details and designations
console.log(`Company name: ${companyName}`);
console.log(`Nationality: ${nationality}`);
console.log(`Specific Designation: ${specificDesignation}`);
console.log(`Random Designation: ${randomDesignation}`);


```

```javascript
// Import the required functions from the json-mock-factory package
const { 
  getSalary, 
  getRandomSalary, 
  getRandomExperience, 
  generateRandomAddress, 
  getRandomStreetName, 
  getRandomCityName, 
  getRandomState, 
  getRandomZipCode 
} = require('json-mock-factory');

// Generate a random designation (previously obtained) and calculate salary and experience based on it
const designation = getRandomCompanyDesignation(); // Assuming this was obtained earlier
const { salary, experience } = getSalary(designation, getRandomExperience());

// Generate a full random address
const address = generateRandomAddress();

// Generate individual address components
const streetName = getRandomStreetName();
const cityName = getRandomCityName();
const stateName = getRandomState();
const zipCode = getRandomZipCode();

// Output the detailed user information
console.log(`Designation: ${designation}`);
console.log(`Salary: ${salary} with ${experience} years of experience`);
console.log(`Full Address: ${JSON.stringify(address)}`);
console.log(`Street Name: ${streetName}`);
console.log(`City Name: ${cityName}`);
console.log(`State Name: ${stateName}`);
console.log(`ZIP Code: ${zipCode}`);

```
Usage of the saveRandomUsers function.
```javascript
const { saveRandomUsers } = require('json-mock-factory');

// Generate and save 100 random user profiles to 'users.json'
saveRandomUsers(100, 'users.json');

```

the json format of users.json 
```
[
  {
    "id": 1,
    "firstName": "Byran",
    "lastName": "Brewer",
    "gender": "male",
    "nationality": "Portuguese",
    "gmail": "byran.brewer58@gmail.com",
    "company": "SoftwareMomentum Group",
    "designation": "Digital Marketer",
    "department": "Digital Marketing",
    "salary": 95000,
    "experience": 5,
    "address": {
      "street": "808 Pine Street",
      "city": "Newport",
      "state": "Rhode Island",
      "zipCode": "42096"
    }
  }
]

```
Usage of the saveRandomProducts function.


```javascript
const { saveRandomProducts } = require('json-mock-factory');

// Generate and save 200 random product details to 'products.json'
saveRandomProducts(200, 'products.json');
```

The JSON format of product.json varies according to the product.


```
User
[
  {
    "id": 1,
    "name": "Running Shoes",
    "brand": "Brooks",
    "colors": "Purple",
    "category": "Footwear",
    "description": "Comfortable running shoes for jogging and exercise.",
    "price": 149.99,
    "tags": [
      "Sportswear",
      "Outdoor",
      "Comfortable"
    ],
    "materials": "Mesh",
    "sizes": [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/xif0q/shoe/a/7/c/10-runfree-t-blue-44-sfr-blue-bg-enhanced-original-imagk9rbgems7a9g.jpeg?q=20&crop=true"
  },
  {
    "id": 2,
    "name": "Microwave",
    "brand": "Panasonic",
    "colors": "Navy",
    "category": "Appliances",
    "description": "Microwave oven for quick and easy cooking.",
    "price": 79.99,
    "tags": [
      "Appliance",
      "Convenient",
      "Quick"
    ],
    "materials": "Plastic",
    "sizes": [],
    "image": "https://www.hindustantimes.com/ht-img/img/2023/12/08/550x309/oven__1702031527383_1702031527695.jpg"
  },
  {
    "id": 3,
    "name": "Jacket",
    "brand": "Patagonia",
    "colors": "Yellow",
    "category": "Clothing",
    "description": "Fashionable jacket for outdoor activities.",
    "price": 499.99,
    "tags": [
      "Outdoor",
      "Fashion",
      "Stylish",
      "Warm"
    ],
    "materials": "Leather",
    "sizes": [],
    "image": "https://img0.junaroad.com/uiproducts/19415034/zoom_0-1677562704.jpg"
  },
  {
    "id": 4,
    "name": "T-shirt",
    "brand": "Under Armour",
    "colors": "Green",
    "category": "Clothing",
    "description": "A classic cotton t-shirt for everyday wear.",
    "price": 15.99,
    "tags": [
      "Casual",
      "Sportswear",
      "Fashion",
      "Comfortable",
      "Cotton"
    ],
    "materials": "Cotton",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://contents.mediadecathlon.com/p2567760/06cf21e3f5a8a75af7ac0659729255e7/p2567760.jpg"
  },
  {
    "id": 5,
    "name": "Blender",
    "brand": "Ninja",
    "colors": "Blue",
    "category": "Appliances",
    "description": "Powerful blender for making smoothies and shakes.",
    "price": 29.99,
    "tags": [
      "Appliance",
      "Versatile",
      "Powerful"
    ],
    "materials": "Glass",
    "sizes": [],
    "image": "https://jmlstore-sg.s3.amazonaws.com/production/spree/images/8810/large/Product_picture_%28722_%C3%97_873px%29_%281080_%C3%97_1080px%29_%2827%29.png?1694680539"
  },
  {
    "id": 6,
    "name": "Printer",
    "brand": "Canon",
    "colors": "Brown",
    "category": "Other",
    "description": "High-quality printer for printing documents and photos.",
    "price": 299.99,
    "tags": [
      "Tech",
      "Office",
      "Document"
    ],
    "materials": "Metal",
    "sizes": [],
    "image": "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/8/381U2A-1_T1680352515.png"
  },
  {
    "id": 7,
    "name": "External Hard Drive",
    "brand": "Western Digital",
    "colors": "White",
    "category": "Electronics",
    "description": "Reliable external hard drive for storing data.",
    "price": 49.99,
    "tags": [
      "Tech",
      "Storage",
      "Reliable"
    ],
    "materials": "Plastic",
    "sizes": [],
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNY12_AV1?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1595971695000"
  },
  {
    "id": 8,
    "name": "Smartphone",
    "brand": "Samsung",
    "colors": "Green",
    "category": "Electronics",
    "description": "Latest smartphone with advanced features.",
    "price": 699.99,
    "tags": [
      "Tech",
      "Smart",
      "Advanced"
    ],
    "materials": "Metal",
    "sizes": [],
    "image": "https://i02.appmifile.com/308_operatorx_operatorx_opx/26/09/2023/4796e703846ff6b8afdca74fc2755a10!500x500.png"
  },
  {
    "id": 9,
    "name": "Mountain Bike",
    "brand": "Giant",
    "colors": "Black",
    "category": "Sports & Outdoors",
    "description": "Durable mountain bike for off-road adventures.",
    "price": 499.99,
    "tags": [
      "Sports",
      "Outdoor",
      "Durable"
    ],
    "materials": "Carbon Fiber",
    "sizes": [],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4-_-I8GuIQM9vTiJ1ncm7qLmUwkGVrhXFA&usqp=CAU"
  },
  {
    "id": 10,
    "name": "Mouse",
    "brand": "SteelSeries",
    "colors": "Orange",
    "category": "Electronics",
    "description": "Wireless mouse for easy navigation.",
    "price": 29.99,
    "tags": [
      "Tech",
      "Computer",
      "Wireless"
    ],
    "materials": "Plastic",
    "sizes": [],
    "image": "https://img.fruugo.com/product/4/76/185979764_max.jpg"
  },
  {
    "id": 11,
    "name": "Coffee Maker",
    "brand": "Mr. Coffee",
    "colors": "Brown",
    "category": "Appliances",
    "description": "Convenient coffee maker for brewing your favorite coffee.",
    "price": 69.99,
    "tags": [
      "Appliance",
      "Convenient",
      "Quick"
    ],
    "materials": "Metal",
    "sizes": [],
    "image": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705921289/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/245684_0_ng4sza.png?tr=w-600"
  },
  {
    "id": 12,
    "name": "Tablet",
    "brand": "Amazon",
    "colors": "Navy",
    "category": "Electronics",
    "description": "Portable tablet for productivity and entertainment.",
    "price": 199.99,
    "tags": [
      "Tech",
      "Portable",
      "Versatile"
    ],
    "materials": "Metal",
    "sizes": [],
    "image": "https://www.telegraph.co.uk/content/dam/recommended/2019/05/10/Google-Pixel-Slate_Best-tablets-secondary_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png"
  }
]
```



Products
Create product-related mock data efficiently:

saveRandomProducts(numProducts, filePath): Generates and saves numProducts unique random product details to the specified filePath.

