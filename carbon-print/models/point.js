const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Point name must be provided.']
    },
    pointValue:{
        type:Number,
        required:[true, 'Point value must be provided.']
    },
    createdAt:{
        type:Date,
        default:Date.now() 
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, "Please provide user."]
    }
});

module.exports = mongoose.model("Point",PointSchema);