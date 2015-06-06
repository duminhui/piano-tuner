var mongoose = require('mongoose');

var CostomerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    avatar: String,
    phone_number: String,
    address: String
}

var Costomer = mongoose.model('Costomer', CostomerSchema);
var a_costomer = new Costomer({  });

//save to MongoDB
a_costomer.save(function (err){
    if(err) return handleError(err);
    //saved!
    })

//or
