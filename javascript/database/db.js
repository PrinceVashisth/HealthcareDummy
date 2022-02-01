const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/healthcare', {})
    .then(() => {
        console.log("connection sucessfull mongodb");
    }).catch((e) => {
        console.log(e);
    })