const express = require("express");
const bodyParser = require("body-parser");4
const https = require("https");
const app = express();
app.set('view engine', 'ejs');
let items=["chicken","mutton","fish"];
let workItems=[];
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static("public"));
var day=0;
var currentDay;
app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long'};
    var today  = new Date();
   
    var day=today.toLocaleTimeString("en-US",options);
    console.log(day);

    res.render("list",{
        listTitle:day,newListItem:items
    });
   
});
app.post("/",function(req,res){
    console.log(req.body.list);
    let item = req.body.newIteam;
    if(req.body.list ==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});
app.get("/work",function(req,res){
    res.render("List",{listTitle : "Work List",newListItem:workItems})
})
// app.post("/work",function(req,res){
//     let item = req.body.newIteam;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.get("/about",function(req,res){
    res.render("about");
})
console.log(currentDay);
app.listen(3000);