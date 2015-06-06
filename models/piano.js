var mongoose = require('mongoose');

var PianoSchema = new mongoose.Schema({
    owner: ObjectId,
    last_name: String,
    image: String,
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
