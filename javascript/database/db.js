const mongoose = require('mongoose');
// const DB = process.env.DATABASE;
DB =process.env.DATABASE;

mongoose.connect(DB)
.then((result) => {

}).catch((err) => {
    console.log(err);
});