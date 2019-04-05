const routes = require("express").Router();
const TestController = require("@controller/Test");

routes.get("/", TestController.helloWorld);

module.exports = routes;