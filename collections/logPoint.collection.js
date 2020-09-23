let mongoose = require('mongoose');
let logPointSchema = mongoose.Schema({
        trueid : {type : String,required: true},
        user_id : {type : String,required: true},
        order_id : {type : String,required: true},
        partner_id : {type : String,required: true},
        action : {type : String,required: true},
        code : {type : String,required: true},
        message : {type : String,required: true},
        section : {type : String,required: true},
        created_at : {type : Date,default : Date.now}
    },{ collection : 'log_point'}
);

module.exports = mongoose.model('log_point', logPointSchema);