const mongoose = require('mongoose');
// const DB = process.env.DATABASE;
DB =process.env.DATABASE;

mongoose.connect(DB)
.then((result) => {
 console.log('connection sucessfull');   
}).catch((err) => {
    console.log(err);
});


// mongoose.connect('mongodb://localhost:27017/healthcare', {})
//     .then(() => {
//         console.log("connection sucessfull mongodb");
//     }).catch((e) => {
//         console.log(e);
//     })