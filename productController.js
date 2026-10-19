let products = [
    { id: 1, title: "Laptop", price: 800, inStock: true },
    { id: 2, title: "Mouse", price: 25, inStock: true },
    { id: 3, title: "Keyboard", price: 45, inStock: false }
];

// 1. Get all products
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// 2. Filter products in stock
exports.getAvailableProducts = (req, res) => {
    let available = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].inStock === true) {
            available.push(products[i]);
        }
    }
    res.json(available);
};

// 3. Add new product
exports.addProduct = (req, res) => {
    let newProduct = {
        id: products.length + 1,
        title: req.body.title,
        price: req.body.price,
        inStock: true
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};