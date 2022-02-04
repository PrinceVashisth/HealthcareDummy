const mongoose = require('mongoose');
const express = require('express');
const Schema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
   Lastname:{
       type:String,
       required:true
   },
   Age:{
      type : Number,
      required :true
   },
   Password:{
       type:String,
       required:true,
       unique:true
   },
   CPassword : {
       type:String,
       required : true
   }
})

const User = new mongoose.model("USER",Schema);
// console.log('Schema connected');
module.exports=User;


// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const scema = new mongoose.Schema({
//     name: String,
//     surname: String,
//     phone: Number,
//     email: {
//         type: String,
//         validator(v) {
//             if (!isEmail.validator(v))
//                 return new Error('wrong email');
//         },
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },
//     Tokens: [{
//         token: {
//             type: String,
//             require: true
//         }
//     }]

// });

// //methods works with instances
// //generating tokens
// scema.methods.generateAuthToken = async function() {
//     try {
//         const Token = jwt.sign({ _id: this._id }, mynameisprincevashisth);
//         this.Tokens = this.Tokens.concat({ token: Token });
//         console.log(Token);
//         return Token;
//     } catch (error) {
//         console.log(`the error part ${error}`);

//     }

// }

// //bcrypt password  saves encryped password
// scema.pre("save", async function(next) {
//     this.password = await bcrypt.hash(this.password, 4);
//     console.log(this.password);
//     next();
// })

// const Playlist = new mongoose.model("Playlist", scema);

// module.exports = Playlist;