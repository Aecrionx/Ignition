let reader = require('./scripts/file_reader');
let writer = require('./scripts/file_writer');

const { Router } = require("express");
const path = require("path");
const router = new Router();

router.post('/login', function(req,res){

    console.log(req.params);//var bool = reader.read()
    
    res.status(404);//
    res.send("hello");
    
    //res.sendFile(path.join(__dirname+"/index.html"));
    
})

router.get('/',function(req,res){
    //res.send("test");
    res.redirect("https://teamqq.wixsite.com/ignition");//res.sendFile(path.join(__dirname+"/index.html"));
})

router.get('/business',function(req,res){
    //res.send("test");
    res.sendFile(path.join(__dirname+"/business_list.html"));
})

router.get('/driver',function(req,res){
    //res.send("test");
    res.sendFile(path.join(__dirname+"/driver_list.html"));
})

router.get('/login',function(req,res){
    //res.send("test");
    res.sendFile(path.join(__dirname+"/login.html"));
})

router.get('/business_dashboard',function(req,res){
    //res.send("test");
    res.sendFile(path.join(__dirname+"/business_side_dash.html"));
})

router.get('/driver_dashboard',function(req,res){
    //res.send("test");
    res.sendFile(path.join(__dirname+"/driver_side_dash.html"));
})

module.exports = router;