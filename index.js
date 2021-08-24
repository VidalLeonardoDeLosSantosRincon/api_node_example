//const body_parser = require('body-parser');
const app = require("./src/routes");
const $ = require('./helpers');
const port = process.env.PORT || 1801;

const server = app.listen(port, ()=>{
    $(`Server running on port: ${port}`);   
});

process.on('SIGTERM', () => {
    server.close(() => {
      $('Process terminated');
    });
});



//https://rd-provinces-api.herokuapp.com/provinces