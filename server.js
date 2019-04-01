const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send("Hello, World");
});

app.listen(process.env.PORT || 3000, err => {
    if (err) console.log("Erro...")
    
    console.log("Running...")
});

