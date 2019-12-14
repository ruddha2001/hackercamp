const bodyParser = require ('body-parser');
const express = require ('express');
const jwt = require ('jsonwebtoken');

const app = express();

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));

app.get ('/', function(req,res){
    res.send ("The Express Server is up and running. However no function has been defined for this function to execute.");
});

app.listen(8000,function(err){
    if (err) console.log(err);
    console.log("Server listening on Port 8000. The local server is http://127.0.0.1:8000");
});