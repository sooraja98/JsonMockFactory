const { generateRandomName } = require('../userUtils/userName');

const generateRandomEmail = () => {
    const { firstName, lastName } = generateRandomName();
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNumber}@example.com`;
};

module.exports = generateRandomEmail;
