const mongoose = require('mongoose');
// const express = require('express');
const Schema = new mongoose.Schema({
    view:{
        type:String,
        required:true
    }
})

const View = new mongoose.model("VIEW",Schema);
console.log('Schema connected views');
module.exports=View;