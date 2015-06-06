var mongoose = require('mongoose');

var TunerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    age: Number,
    avatar: String,
    phone_number: String,
    years_of_actual_operation: Number,
    years_of_continuous_working: Number
}

var Tuner = mongoose.model('Tuner', TunerSchema);
var a_tuner = new Costomer({  });

//save to MongoDB
a_costomer.save(function (err){
    if(err) return handleError(err);
    //saved!
    })

//or
