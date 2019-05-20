
'use strict'

var mysql      = require('mysql');

const fs = require('fs');

/*
var parser = require('xml2json');
var Promise = require('promise');
let connection;
async function connection1() {

  fs.readFile(__dirname + '/config.xml', function (err, data) {
        const json = parser.toJson(data);

        var con = JSON.parse(json).configuration.con;
        console.log("to json ->",con);
        var connection = mysql.createConnection({
            host: con.host,
            user: con.username,
            password: con.password,
            port: con.port,
            database: con.database,
            charset: con.charset
        });

        connection.connect(function (err) {
            if (!err) {
                console.log("Database is connected");
               return connection
            } else {
                //reject(connection)
                console.log("Error while connecting with database" + err);
            }

          // return connection
        });
    });
    }
module.exports   = async function(){
    //console.log(await connection1())
    return await connection1()
}();



const init = async function (a) {
    fs.readFile(__dirname + '/config.xml', function (err, data) {
        json = parser.toJson(data);
        var con = JSON.parse(json).configuration.con;
        // console.log("to json ->",con);
        var connection = mysql.createConnection({
            host: con.host,
            user: con.username,
            password: con.password,
            port: con.port,
            database: con.database,
            charset: con.charset
        });
        connection.connect(function (err) {
            if (!err) {
                console.log("Database is connected");

            } else {
                console.log("Error while connecting with database" + err);
            }
            //console.log(connection)
            return connection
        });
    });
};
console.log(init())
  module.exports = init();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
port:'3306',
  database : 'hotels',
  charset : 'utf8_general_ci'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database"+err);
}
});
*/
/*var connection = mysql.createConnection({
  host     : '94.156.144.217',
  user     : 'hotel',
  password : 'indian12',
port:'3306',
  database : 'hotels',
  charset : 'utf8_general_ci'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database"+err);
}})*/

 var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'indian@12',
        server: '109.94.110.164',
        database: 'mbbathroom'
    };
    sql.connect(config, function (err) {

        if (err) console.log(err)
        else console.log("Database connected successfully.");
    });
    var connection=new sql.Request();
module.exports=connection



