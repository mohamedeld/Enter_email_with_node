var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'company'
});


app.get('/', function (req, res ){
    var q = 'select count(*) as count from users';
    connection.query(q,function(err,results){
        if (err) throw err;
        var count = results[0].count;

        //res.send("we have "+ count +" users");
        res.render("home",{data:count});
    });
});
app.post('/register',function(req,res){
    var person = {
        email : req.body.email
    };
    //var q = "insert into users values ("+req.body.email+" )";
    connection.query("insert into users set ?",person,function(err,results){
        if (err) throw err;
        res.redirect("/");
    })
})


app.listen(8080,function(){
    console.log("listening on port 8080");
});