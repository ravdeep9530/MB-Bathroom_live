var mysql      = require('mysql');
var schema=mysql.schema;

module.exports=mysql.model('LOK',new Schema({
    name:String,
    password:String,
    role:int,
    createdAt:Date,
    isActive:int
}));