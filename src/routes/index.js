const express = require('express');
const $ = require('../../helpers');
const costumers = require('../db/costumers/queries');

const app = express();
app.use(express.json());

//routes**
    //home
    app.get("/", (req, res)=>{
        res.send("Welcome to my API!");
    });

    //get a specific costumer
    app.get("/costumers/:id", (req, res)=>{
        const {id} = req.params;
        costumers.getCostumer(id, res);
    });

    //get all costumers
    app.get("/costumers/", (req, res)=>{
        costumers.getCostumers(res);
    });

    //add a costumer
    app.post("/costumers/new", (req, res)=>{
        
        const {name, country} = req.body;
        const newCostumer = {
            name: name || "",
            country: country || ""
        }
        costumers.addCostumer(newCostumer, res);
    });

    //update a costumer
    app.put("/costumers/update/:id", (req, res)=>{
        const {id} = req.params;
        const {name, country} = req.body;
        const newCostumer = {
            name: name || "",
            country: country || ""
        }
        costumers.updateCostumer(id, newCostumer, res);
    });
    
    //delete a costumer
    app.delete("/costumers/delete/:id", (req, res)=>{
        const {id} = req.params;
        costumers.deleteCostumer(id, res);
    });

module.exports = app;



