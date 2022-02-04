const mongoose = require('mongoose');

DB =process.env.DATABASE;
mongoose.connect(DB)
.then((result) => {
 console.log('connection sucessfull viewer');   
}).catch((err) => {
    console.log(err);
});