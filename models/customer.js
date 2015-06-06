var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    gender: String,
    avatar: String,
    phone_number: String,
    address: String,
    email_address: String
}

var Customer = mongoose.model('Costomer', CostomerSchema);
var a_customer = new Costomer({  });

//save to MongoDB
a_costomer.save(function (err){
    if(err) return handleError(err);
    //saved!
    })

//or
