const { fake } = require('faker');
var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password :"",
    database : "company"
});
// var data=[
//     ['mohand11@gmail.com','2020-02-11 12:03:10'],
//     ['ahmedali12@gmail.com','2016-01-06 10:09:06'],
//     ['mohsen2321@gmail.com','2019-05-10 09:05:03']
// ]
var data=[];
for(let i =0;i<500;i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
//var person = {email : faker.internet.email()};
connection.query('insert into users (email,created_at) values ?',[data],(err,result,fields)=>{
    if(err) throw err;
    console.log(result);
})
connection.end();
// connection.query(`select * from users`,(err,result,fields)=>{
//     if(err) throw err;
//     console.log(result);
// })