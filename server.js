require("dotenv").config();
require("module-alias/register");

const config = require("@config");
const app = require("@app");


app.listen(config.app.port, err => {
    if (err) console.log("Erro...");
    
    console.log(`Running on port ${config.app.port}`);
});

