var express = require("express");
var app = express();

app.get('/', (req, res) => res.send('Order Service'));

app.get("/order", (req, res, next) => {
	
    let hostname = process.env.HOSTNAME;

    var order = [];

    order.push({
		hostname: hostname
    });

    order.push({
        id: 1,
        description: "Mobile Consignment",
        customerName: "Unicity Corporation",
        totalAmount: "$ 4500"
    });

    order.push({
        id: 2,
        description: "PPE and Test Kit Consignment",
        customerName: "Locational Pharma",
        totalAmount: "$ 6500"
    });

    res.json(order);
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
