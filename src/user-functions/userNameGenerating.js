const { generateRandomName } = require('../userUtils/userName');

const generateRandomNames = () => {
    const { firstName, lastName } = generateRandomName();
    return `${firstName} ${lastName}`;
};

module.exports = generateRandomNames;
