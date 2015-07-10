var mongoose = require('mongoose');

var TuningItemSchema = new mongoose.Schema({
    piano_tuning: Number,
    piano_repair: Number,
    action_regulation: Number,
    hammer_voicing: Number
});
    

var TunerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    age: Number,
    avatar: String,
    phone_number: String,
    email_address: String,
    years_of_entire_work: Number,
    years_of_continuous_work: Number,
    averange_orders_per_month: Number,
    other_profile: String
});

var Tuner = mongoose.model('Tuner', TunerSchema);
var a_tuner = new Costomer({  });

//save to MongoDB
a_costomer.save(function (err){
    if(err) return handleError(err);
    //saved!
    })

//or
