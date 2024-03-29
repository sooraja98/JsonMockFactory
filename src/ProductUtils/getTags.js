const getTags = (productName) => {
    const tagMappings = {
        "T-shirt": ["Casual", "Sportswear", "Fashion", "Comfortable", "Cotton"],
        "Jeans": ["Casual", "Formal", "Fashion", "Denim"],
        "Dress": ["Formal", "Fashion", "Elegant"],
        "Hoodie": ["Casual", "Sportswear", "Comfortable", "Warm"],
        "Sweater": ["Casual", "Fashion", "Comfortable", "Warm"],
        "Jacket": ["Outdoor", "Fashion", "Stylish", "Warm"],
        "Skirt": ["Casual", "Fashion", "Versatile"],
        "Sneakers": ["Casual", "Sportswear", "Comfortable"],
        "Running Shoes": ["Sportswear", "Outdoor", "Comfortable"],
        "Sandals": ["Casual", "Outdoor", "Comfortable"],
        "Backpack": ["Outdoor", "Tech", "Convenient"],
        "Watch": ["Fashion", "Stylish", "Luxury"],
        "Headphones": ["Tech", "Wireless", "Noise-Canceling"],
        "Laptop": ["Tech", "Portable", "High-Performance"],
        "Smartphone": ["Tech", "Smart", "Advanced"],
        "Gaming Console": ["Tech", "Gaming", "Entertainment"],
        "Camera": ["Tech", "Photography", "Professional"],
        "Fitness Tracker": ["Tech", "Fitness", "Health"],
        "Bluetooth Speaker": ["Tech", "Portable", "Wireless"],
        "External Hard Drive": ["Tech", "Storage", "Reliable"],
        "Tablet": ["Tech", "Portable", "Versatile"],
        "E-reader": ["Tech", "Reading", "Portable"],
        "Keyboard": ["Tech", "Computer", "Wireless"],
        "Mouse": ["Tech", "Computer", "Wireless"],
        "Monitor": ["Tech", "Computer", "High-Resolution"],
        "Projector": ["Tech", "Entertainment", "Portable"],
        "Coffee Maker": ["Appliance", "Convenient", "Quick"],
        "Robot Vacuum": ["Appliance", "Efficient", "Automated"],
        "Microwave": ["Appliance", "Convenient", "Quick"],
        "Blender": ["Appliance", "Versatile", "Powerful"],
        "Vacuum Cleaner": ["Appliance", "Efficient", "Powerful"],
        "Toaster": ["Appliance", "Convenient", "Quick"],
        "Food Processor": ["Appliance", "Versatile", "Efficient"],
        "Electric Kettle": ["Appliance", "Convenient", "Quick"],
        "Rice Cooker": ["Appliance", "Convenient", "Efficient"],
        "Steam Iron": ["Appliance", "Convenient", "Efficient"],
        "Hair Dryer": ["Appliance", "Convenient", "Quick"],
        "Electric Shaver": ["Appliance", "Convenient", "Quick"],
        "Steamer": ["Appliance", "Convenient", "Efficient"],
        "Juicer": ["Appliance", "Convenient", "Healthy"],
        "Waffle Maker": ["Appliance", "Convenient", "Quick"],
        "Guitar": ["Music", "Instrument", "Versatile"],
        "Desk Chair": ["Furniture", "Comfortable", "Ergonomic"],
        "Mountain Bike": ["Sports", "Outdoor", "Durable"],
        "Sunglasses": ["Fashion", "Accessories", "UV Protection"],
        "Handbag": ["Fashion", "Accessories", "Stylish"],
        "Hat": ["Fashion", "Accessories", "Sun Protection"],
        "Printer": ["Tech", "Office", "Document"],
        "Drone": ["Tech", "Photography", "Aerial"],
    };

    return tagMappings[productName] || [];
};

module.exports = getTags;



