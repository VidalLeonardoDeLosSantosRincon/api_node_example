const db = require('../../connection');

//get all costumers
const getCostumers = (res) => {
    const sql = 'SELECT * FROM costumers';
    db.query(sql, (error, results)=>{
        if(error) throw error;
        (results.length > 0)? res.json(results) : res.json({api_message:"Not results"});
    });
};

//get a costumer
const getCostumer = (id = 0, res) =>{
    if(id.trim() !== "" && id > 0){
        sql = `SELECT * FROM costumers WHERE id = ${id}`;
        db.query(sql, (error, results)=>{
            if(error) throw error;
            (results.length > 0)? res.json(results) : res.json({api_message:"Not results"});
        });
    }else{
        res.json({api_message:"Invalid ID given"});
    }
};

///add a costumer
const addCostumer = (costumer, res) =>{
    if(costumer.name.trim() !== "" && costumer.country.trim() !== ""){
        const sql = `INSERT INTO costumers SET ?`;
        db.query(sql, costumer, (error)=>{
            if(error) throw error;
            res.json({api_message:"Costumer created"});
        });
    }else{
        res.json({api_message:"Empty fields not allowed"});
    }
};

//update a costumer
const updateCostumer = (id = 0, costumer, res) =>{
    if(id.trim() !== "" && id > 0){
        if(costumer.name.trim() !== "" && costumer.country.trim() !== ""){
            sql = `UPDATE costumers SET ? WHERE id = ${id}`;
            db.query(sql, costumer, (error)=>{
                if(error) throw error;
                res.json({api_message:"Costumer updated"});
            });
        }else{
            res.json({api_message:"Empty fields not allowed"});
        }
    }else{
        res.json({api_message:"Invalid ID given"});
    }
};

//delete a costumer
const deleteCostumer = (id = 0, res) => {
    if(id.trim() !== "" && id > 0){
        sql = `DELETE FROM costumers WHERE id = ${id}`;
        db.query(sql, (error)=>{
            if(error) throw error;
            res.json({api_message:"Costumer deleted"});
        });  
    }else{
        res.json({api_message:"Invalid ID given"});
    }
};

const costumers = {
    getCostumers,
    getCostumer,
    addCostumer,
    updateCostumer,
    deleteCostumer
}

module.exports = costumers;