const productNames = require('../ProductUtils/productName');
const getBrand = require('../ProductUtils/getBrand');
const getColors = require('../ProductUtils/getColors');
const getProductCategory = require('../ProductUtils/getProductCategory');
const getProductDescription = require('../ProductUtils/getProductDescription');
const getProductPrices = require('../ProductUtils/getProductPrices');
const getTags = require('../ProductUtils/getTags');
const materialsByProduct = require('../ProductUtils/materialsByProduct');
const sizesByProduct = require('../ProductUtils/sizesByProduct');
const getRandomImageUrl=require('../ProductUtils/getImages')

const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const getRandomProduct = (counter) => {
    const selectedProductName = getRandomElement(productNames);
    const brand = getBrand(selectedProductName);
    const colors = getColors(selectedProductName);
    const category = getProductCategory(selectedProductName);
    const description = getProductDescription(selectedProductName);
    const price = getProductPrices(selectedProductName);
    const tags = getTags(selectedProductName);
    const materials = materialsByProduct[selectedProductName];
    const sizes = sizesByProduct[selectedProductName];
    const image=getRandomImageUrl(selectedProductName)

    return {
        id: counter,
        name: selectedProductName,
        brand: brand ? getRandomElement(brand) : "Unknown Brand",
        colors: colors ? getRandomElement(colors) : [],
        category: category ? category : "Unknown Category",
        description: description ? description : "No description available",
        price: price ? getRandomElement(price) : "Unknown Price",
        tags: tags ? tags : [],
        materials: materials ? getRandomElement(materials) : "Unknown Material",
        sizes: sizes ? sizes : [],
        image:image
    };
};

const generateUniqueRandomProducts = (num) => {
    const products = new Set();
    let counter = 0;
    let totalGenerated = 0;
    while (totalGenerated < num) {
        const product = getRandomProduct(++counter);
        products.add(JSON.stringify(product));
        totalGenerated++;

        if (totalGenerated % 1000 === 0 || totalGenerated === num) {
            console.log(`Generated ${totalGenerated} unique random products.`);
        }
    }
    return Array.from(products).map(JSON.parse);
    
};


module.exports=generateUniqueRandomProducts