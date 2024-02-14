const getProductCategory = (productName) => {
    const categories = {
        "Clothing": ["T-shirt", "Jeans", "Dress", "Hoodie", "Sweater", "Jacket", "Skirt"],
        "Footwear": ["Sneakers", "Running Shoes", "Sandals"],
        "Accessories": ["Backpack", "Watch", "Sunglasses", "Handbag", "Hat"],
        "Electronics": ["Headphones", "Laptop", "Smartphone", "Gaming Console", "Camera", "Fitness Tracker", "Bluetooth Speaker", "External Hard Drive", "Tablet", "E-reader", "Keyboard", "Mouse", "Monitor", "Projector"],
        "Appliances": ["Coffee Maker", "Robot Vacuum", "Microwave", "Blender", "Vacuum Cleaner", "Toaster", "Food Processor", "Electric Kettle", "Rice Cooker", "Steam Iron", "Hair Dryer", "Electric Shaver", "Steamer", "Juicer", "Waffle Maker"],
        "Musical Instruments": ["Guitar"],
        "Furniture": ["Desk Chair"],
        "Sports & Outdoors": ["Mountain Bike"]
    };

    for (const category in categories) {
        if (categories[category].includes(productName)) {
            return category;
        }
    }
    
    return "Other"; 
}


module.exports = getProductCategory