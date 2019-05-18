var express = require('express')
var bodyParser = require('body-parser')
var os = require("os");
var app = express();
var multer =require('multer');
var upload =multer();
//for parsing multipart form data
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array('resume'));
app.post('/formData',function(req,res)
{
 
    var json_stringfy =JSON.stringify(req.body)
    var file_json_stringfy =JSON.stringify(req.files)
    // res.send('request we sented ' + req.body["name"])
    var x = req.files;
    console.log(x);
    res.send('request we sented ' + json_stringfy + " files" + file_json_stringfy)

});

app.listen(3001)