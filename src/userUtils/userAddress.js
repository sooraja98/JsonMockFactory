const streetNames = [
    "Maple Street", "Oak Street", "Pine Street", "Cedar Street", "Elm Street",
    "Birch Street", "Chestnut Street", "Ash Street", "Willow Street", "Poplar Street",
    "Cherry Street", "Magnolia Street", "Walnut Street", "Beech Street", "Dogwood Street",
    "Hickory Street", "Spruce Street", "Sycamore Street", "Fir Street", "Hemlock Street",
    "Juniper Lane", "Redwood Road", "Sequoia Lane", "Cypress Avenue", "Alder Road",
    "Aspen Way", "Laurel Lane", "Holly Drive", "Ivy Lane", "Jasmine Avenue",
    "Kalmia Road", "Lilac Lane", "Maplewood Drive", "Nectarine Street", "Olive Avenue",
    "Peachtree Street", "Quince Avenue", "Rosewood Drive", "Sumac Street", "Tulip Drive",
    "Umbrella Road", "Violet Street", "Wisteria Lane", "Xylosma Lane", "Yucca Drive",
    "Zelkova Road", "Acacia Avenue", "Banana Street", "Camphor Lane", "Date Palm Drive"
];


const cityNames = [
    "Springfield", "Riverside", "Greenville", "Madison", "Georgetown",
    "Arlington", "Ashland", "Bristol", "Clinton", "Fairview",
    "Franklin", "Hamilton", "Jackson", "Lexington", "Lincoln",
    "Manchester", "Marlborough", "Milford", "Monroe", "Newport",
    "Oakland", "Parkville", "Quincy", "Richmond", "Salem",
    "Trenton", "Union", "Victorville", "Warren", "Xenia",
    "Yorktown", "Zanesville", "Albany", "Boulder", "Carmel",
    "Dallas", "Edison", "Fargo", "Gainesville", "Hartford"
];


const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];


const zipCodes = [
    "12345", "23456", "34567", "45678", "56789",
    "67890", "78901", "89012", "90123", "01234",
    "13579", "24680", "02468", "13570", "24681",
    "97531", "86420", "75319", "64208", "53107",
    "42096", "31905", "20814", "10723", "09632",
    "98541", "87430", "76329", "65218", "54117",
    "43006", "32915", "21804", "19703", "08622",
    "97520", "86411", "75310", "64209", "53108"
];

// Function to generate a single random address
const generateRandomAddress = () => {
    const streetNumber = Math.floor(Math.random() * 1000) + 1; 
    const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
    const city = cityNames[Math.floor(Math.random() * cityNames.length)];
    const state = states[Math.floor(Math.random() * states.length)];
    const zipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];

    return {
        street: `${streetNumber} ${streetName}`,
        city: city,
        state: state,
        zipCode: zipCode
    };
};
// Function to get a random street name
const getRandomStreetName = () => {
    return streetNames[Math.floor(Math.random() * streetNames.length)];
};

// Function to get a random city name
const getRandomCityName = () => {
    return cityNames[Math.floor(Math.random() * cityNames.length)];
};

// Function to get a random state
const getRandomState = () => {
    return states[Math.floor(Math.random() * states.length)];
};

// Function to get a random zip code
const getRandomZipCode = () => {
    return zipCodes[Math.floor(Math.random() * zipCodes.length)];
};
module.exports = {
    generateRandomAddress,
    getRandomStreetName,
    getRandomCityName,
    getRandomState,
    getRandomZipCode,
    
};
