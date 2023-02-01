const express = require('express');
const PORT = 700;
const app = express();
const database = require('./config/mongoose');
const cors = require('cors');
const jwt = require('./config/passport_jwt');

app.use(cors());
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested:With, Content-Type, Accept"
    );
    next();
})

app.use(express.urlencoded());

app.use('/', require('./routes/index'));


app.listen(PORT, (error) => {
    if(error) {
        console.log("Error while running the Server");
    }
    console.log(`Server is up and running on port: ${PORT}`);
})