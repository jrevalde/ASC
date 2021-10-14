const express = require("express");

const https = require("https");

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    console.log("winner chicken!");
    res.sendFile(__dirname + "/index.html");
});




app.listen(3030, function(){
    console.log("live on port 3030");
})