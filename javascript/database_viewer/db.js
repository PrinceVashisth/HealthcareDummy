const mongoose = require('mongoose');

DB =process.env.DATABASE;
mongoose.connect(DB)
.then((result) => { 
}).catch((err) => {
    console.log(err);
});