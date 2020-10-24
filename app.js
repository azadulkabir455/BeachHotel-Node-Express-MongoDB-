const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');

const app = express();
const port = 3000;

app.use('/public',express.static('public'));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/',(req,res) => {
    res.status(200).render("index.pug");
})

app.get('*',(req,res) => {
    res.status(200).render("404.pug");
})


app.listen(port, (req, res) => {
    console.log(`Site start in port: localhost:${port}`);
})