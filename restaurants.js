express = require ('express');
var bodyParser = require('body-parser')
var os = require("os");
var hotel = express();
var cors = require('cors');
hotel.use(cors());

var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password :"",
    database :"resturants"
});
con.connect( function(err)
    {
        if(err) throw err;
        
        console.log("connected!");

    }
)
hotel.get('/restaurants',function(req,res){
    var sql = "SELECT REST_NAME FROM RESTURANTS"
    con.query(sql,function(err , result)
    {
        if(err) throw err
        var restname = JSON.stringify(result);
        res.send(restname);
    })

});

hotel.listen(3002);