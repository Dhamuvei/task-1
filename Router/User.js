const Route = require("express").Router();
const Controller = require("../controller/User-controller");

Route.post("/post", Controller.Insert);
Route.get("/getAllData", Controller.getallData);
Route.get("/getById/:id", Controller.findByID);
Route.put("/updataData/:_id", Controller.UpdatData);
Route.delete("/deleteData/:_id", Controller.deleteData);

module.exports = Route;
