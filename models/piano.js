var mongoose = require('mongoose');

var PianoSchema = new mongoose.Schema({
    customer_id: ObjectId,
    brand: String,
    company_notes: String,
    size: String,
    image: String,
}

var Costomer = mongoose.model('Costomer', CostomerSchema);
var a_costomer = new Costomer({  });

//save to MongoDB
a_costomer.save(function (err){
    if(err) return handleError(err);
    //saved!
    })

//or
