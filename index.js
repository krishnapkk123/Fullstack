var express = require('express')
var bodyParser = require('body-parser')
var os = require("os");
var app = express();

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



app.get('/',function(req,res){
    res.send("Hello This is my first Project");
});
//app.listen(3000);
app.get('/employee/:id/:name',function(req,res){
    res.send('Employee Details' + os.EOL + 
        'Number :'+ req.params.id + os.EOL +
        'name :'+ req.params.name 
        );
       
});
app.get('/res/:id',function(req,res){
    var sql = "SELECT * FROM RESTURANTS WHERE ID =" +req.params.id
    con.query(sql ,function(err ,result)
    {
        if(err) throw err ;
        result.forEach(function(i)
        {
            var id = req.params.id;
            name = i["REST_NAME"];
            location =i["LOCATION"];
            open =i["OPENING_TIME"];
            close =i["CLOSING_TIME"];

            res.send("result is " + id + name + location + open + close);
            
        });
        
    });
});

app. use(bodyParser.json())

app.post('/sample' , function(req,res)
{
res.send('Recieved data  ' + req.body["name"]);
});




app.listen(3000);

