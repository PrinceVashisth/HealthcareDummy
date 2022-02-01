const express = require('express');
const hbs = require("hbs");
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const templatePath = path.join(__dirname,"../templates/views");
const PartialsPath = path.join(__dirname,"../templates/partials");

//accouring data base to main app.js  
require("./database/db");
const Healthcare = require('./database/model');
const { Mongoose } = require('mongoose');

//middlewares
app.use(express.static('public'));
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(PartialsPath);
// app.use(express.static(regular));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


// server of backend 
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/help", (req, res) => {
    res.render('help');
})

app.get("/healthcaretips", (req, res) => {
    res.render('healthcaretips');
});

app.get('/CovinLink',(req,res)=>{
    res.render("CovinLink");
});

app.get('/covidapi',(req,res)=>{
    res.render("covidapi");
});

app.get('/Ragisteration',(req,res)=>{
    res.render("Ragisteration");
});

app.get('/Login',(req,res)=>{
    res.render("Login");
});

// other subsidery links section

app.get("/mental", (req, res) => {
    res.render("mental");
});

app.get("/yoga", (req, res) => {
    res.render("yoga");
});

app.get("/routine", (req, res) => {
    res.render("routine");
});

app.get("/mind health", (req, res) => {
    res.render("mind health");
});

app.get("/ragisteration", (req, res) => {
    res.render("ragisteration");
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.get('/Ayurveda',(req,res)=>{
    res.render("Ayurveda");
});
app.get('/CoronaSymtomes',(req,res)=>{
   res.render("CoronaSymtomes");
});

app.get('/hygine',(req,res)=>{
    res.render("hygine");
});

app.get('/HyperTension',(req,res)=>{
    res.render("HyperTension");
});

app.get('/NutritionDiet',(req,res)=>{
    res.render("NutritionDiet");
});

app.get('/SkinCares',(req,res)=>{
    res.render("SkinCares");
});

app.get('/SugarRemedies',(req,res)=>{
    res.render("SugarRemedies");
});

app.get('/Homeopathy',(req,res)=>{
    res.render("Homeopathy");
});

// post request to store in database

app.post("/ragisteration", async (req,res)=>{
    try {
       const host = new Healthcare({
           Firstname : req.body.Firstname,
           Lastname : req.body.Lastname,
           Age : req.body.Age,
           Password : req.body.Password,
           CPassword : req.body.CPassword
       })
        const item = await host.save();
        res.render('index');
        console.log(item);
    } catch (error) {
      console.log(error);  
    }
})

app.listen(port, () => {
    console.log(`listening port at port ${port}`);
});