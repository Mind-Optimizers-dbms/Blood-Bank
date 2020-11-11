var express=require("express");
var app =express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.set("view engine","ejs");

var donors=["Prajwal","Sukruth","Nishanth"];

app.get("/",function(req,res){
    res.render("home");
});

app.get("/user/:userid",function(req,res){
    
    var id=req.params.userid;
    res.render("user",{userId:id});
})

app.get("/donors",function(req,res){
    
    res.render("donors",{donors:donors})
})

app.get("/donorform",function(req,res){
    res.render("donorform");
})

app.post("/adddonor",function(req,res){
    var newDonor=req.body.newDonor;
    donors.push(newDonor);
    console.log(req.body);
    console.log(donors);
    res.redirect("/donors");

})

app.get("*",function(req,res){
    res.send("This is default page");
})

app.listen(3000,function(){
    console.log("Serving on demo port on 3000");
})

