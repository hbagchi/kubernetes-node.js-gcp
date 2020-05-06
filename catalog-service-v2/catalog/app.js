var express = require("express");
var app = express();

app.get('/', (req, res) => res.send('Catalog Service'));

app.get('/intense', (req, res) => {

    let hostname = process.env.HOSTNAME || 'default';

    var catalog = [];

    catalog.push({
        hostname: hostname
    });

    // simulate cpu load
    for (i = 0; i < 1000000000; i++) {
        Math.random(i);
    }

    res.json(catalog);
});

app.get("/catalog", (req, res, next) => {

    let hostname = process.env.HOSTNAME;

    var catalog = [];

    catalog.push({
        hostname: hostname
    });

    catalog.push({
        id: 1,
        name: "Apple iPhone X",
        description: "Apple's latest iPhone",
        price: "$ 700",
        stock: "210 pcs"
    });

    catalog.push({
        id: 2,
        name: "Samsung Gaaxy 10",
        description: "Samsung's latest mobile",
        price: "$ 900",
        stock: "Not Available"
    });

    res.json(catalog);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
