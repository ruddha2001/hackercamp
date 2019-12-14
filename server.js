const bodyParser = require ('body-parser');
const chalk = require ('chalk');
const express = require ('express');
const jwt = require ('jsonwebtoken');

const app = express();

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));


app.post ('/login', function(req,res){
    let username = res.body.user;
    let password = res.body.pass;
    console.log(username);
    console.log(password);
})

//Default function
app.get ('/', function(req,res){
    res.send ("The Express Server is up and running. However no function has been defined for this function to execute.");
});

app.listen(8000,function(err){
    if (err){
        console.log(err);
        console.log(chalk.bgRed("Error Encountered. Read the above logs for details"));
    }
    console.log(chalk.bgGreen.yellowBright.bold("Server listening on Port 8000. The local server is http://127.0.0.1:8000"));
});