var connection = require('../config/config');
const execSync = require('child_process').execSync;
var fs = require('fs');

var fetchController = require(__dirname + '/fetchController');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '32784b18',
    apiSecret: 'c0a5fd15490e93fe'
});

module.exports.register = function (req, res) {
    var today = new Date();
    var users = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "created_at": today,
        "updated_at": today
    }
    connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.redirect('/dashboard');
        }
    });
}
module.exports.addPerson = function (req, res) {
    var today = new Date();

    var lang = {
        "name": req.body.Pname,
        "isActive": 1,
        "address": req.body.Paddress,
        "loan_type_id": req.body.Ploan_type,
        "mob": req.body.Pmob,
        "description": req.body.Padditional,
        "photo_url": req.body.dp,
        "father_name": req.body.Pfname
    }
    res.clearCookie('dp');
    connection.query('INSERT INTO PEOPLE SET ?', lang, function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query' + req.body.Lname
            })
        } else {
            res.json({
                status: true,
                data: results
            });
        }
    });

}
module.exports.insertLoan = function (req, res) {
    var today = new Date();
    var lang = {
        "loan_type_id": req.body.loan_type_id,
        "isActive": 1,
        "loan_amount": req.body.Lamt,
        "due_date": ((req.body.Ldue_date).toString().replace('/', '-')).replace('/', '-'),
        "loan_cycle_id": (req.body.Lcycle).split(':')[1],
        "interst_rate": req.body.Lrate,
        "installment_amt": req.body.Linstl_amt,
        "loaned_byID": req.cookies.user.id,
        "person_id": req.body.Pid,
        "installment_number": req.body.Lno_instl,
        "fine_isActive": req.body.Lfineisactive,
        "file_charge": req.body.Lfile_charge
    }
    connection.query('INSERT INTO LOANS SET ?', lang, function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            res.json({
                status: 200,
                message: 'Loan has been filed successfully.Thanks'
            });
        }
    });
}
module.exports.insertForms = function (req, res) {
    var today = new Date();
    var fid = req.params.fid;
    var table_name = req.params.tname;
    
    

    connection.query("EXEC S_insertForm "+fid+",'"+JSON.stringify(req.body)+"'", function (error, results, fields) {
        if (error) {

            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            var msg = '';


            connection.query('EXEC getFormSubmitMsg ' + fid + ';', function (error, results, fields) {
                {

                   try {
                        msg = results['recordset'][0].text;
                    }catch (err)
                    {

                    } res.json({
                        status: true,
                        data: results['recordset'],
                        message: msg
                    })

                    //res.send(JSON.stringify(results));
                }
            });


        }
    });

}
module.exports.nonSSO_insertForm = function (req, res) {
    var today = new Date();
    //console.log(JSON.stringify(req.body))
    var fid = req.params.fid;
    var nextPage_id=req.params.nextPage_id;
      
    connection.query("EXEC S_insertnonSSOForm "+fid+",'"+JSON.stringify(req.body)+"'", function (error, results, fields) {
        if (error) {

            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            var msg = '';


            connection.query('EXEC getFormSubmitMsg ' + fid + ';', function (error, results, fields) {
                {
                    try {
                        msg = results['recordset'][0].text;
                    }catch (err)
                    {

                    }
                    if (nextPage_id==-1){
                     res.json({
                        status: true,
                        data: results['recordset'],
                        message: msg
                    })} else {
                        res.redirect('/getNextPage/' + nextPage_id)
                    }

                    //res.send(JSON.stringify(results));
                }
            });


        }
    });

}

module.exports.nonSSO_updateForm = function (req, res) {
    var today = new Date();
    var fid = req.params.fid;
    var nextPage_id=req.params.nextPage_id;
      //console.log(JSON.stringify(req.body))
    connection.query("EXEC S_UpdateNonSSOForm "+fid+",'"+JSON.stringify(req.body)+"'", function (error, results, fields) {
        if (error) {

            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            var msg = '';


            connection.query('EXEC getFormSubmitMsg ' + fid + ';', function (error, results, fields) {
                {
                    try {
                        msg = results['recordset'][0].text;
                        msg='?toast='+msg
                    }catch (err)
                    {
                        msg='';
                    }
                    if (nextPage_id==-1){
                     res.json({
                        status: true,
                        data: results['recordset'],
                        message: msg
                    })} else {
                        res.redirect('/getNextPage/' + nextPage_id+msg)
                    }

                    //res.send(JSON.stringify(results));
                }
            });


        }
    });

}

function getFormsSubmitMessage(fid) {
    var msg = '';
    var async = require('asyncawait/async');
    var await = require('asyncawait/await');
    (async(function testingAsyncAwait() {
        await(connection.query('CALL `getFormSubmitMsg`(' + fid + ');', function (error, results, fields) {
            {


                msg = results[0][0].text;


                return msg;
                //res.send(JSON.stringify(results));
            }
        }));

    }))();


}

module.exports.addCategory = function (req, res) {
    var today = new Date();
    var cat = {
        "category_name": req.body.Cname,
        "isActive": 1,
        "category_flag": 1
    }
    connection.query('INSERT INTO TRACK_CATEGORY SET ?', cat, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.redirect('/dashbord');
        }
    });
}
module.exports.deletePeopleData = function (req, res) {

    connection.query("SELECT * FROM SUPER_USER WHERE uid=" + req.cookies.user.id, function (error, results, fields) {

        if (results.length > 0) {
            connection.query('DELETE p FROM PEOPLE p WHERE p.id=' + req.params.pID, function (error, results, fields) {
                if (error) {
                    res.json({
                        status: error,
                        message: 'there are some error with query'
                    })
                } else {
                    res.json({
                        status: true,
                        data: results,
                        message: 'People has been Deleted Successfully.'
                    })
                }
            });
        } else {
            res.json({
                status: true,
                data: results,
                message: 'You are not Aouthrized to this access.'
            })
        }
    });
}
module.exports.deleteLoanByloanID = function (req, res) {

    connection.query("SELECT * FROM SUPER_USER WHERE uid=" + req.cookies.user.id, function (error, results, fields) {

        if (results.length > 0) {
            connection.query('DELETE p FROM LOANS p WHERE p.loan_id=' + req.params.lID, function (error, results, fields) {
                if (error) {
                    res.json({
                        status: error,
                        message: 'there are some error with query'
                    })
                } else {
                    res.json({
                        status: true,
                        data: results,
                        message: 'Laon Deleted sucessfully.'
                    })
                }
            });
        } else {
            res.json({
                status: true,
                data: results,
                message: 'You are not Aouthrized to this access.'
            })
        }
    });
}
module.exports.addTags = function (req, res) {
    var today = new Date();
    var lang = {
        "tag_name": req.body.TagName,
        "isActive": 1,
        "tag_flag": 1
    }
    connection.query('INSERT INTO TAGS SET ?', lang, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.redirect('/dashboard');
        }
    });
}
module.exports.updateInstallment = function (req, res) {
    var today = new Date();

    var installment = {
        "loan_id": req.params.lid,
        "installment_amount": req.params.amt,
        "depositByID": req.cookies.user.id,
        "note": req.params.note,
        "installment_type": 1
    }
    connection.query('INSERT INTO INSTALLMENTS SET ?', installment, function (error, results, fields) {
        if (error) {
            res.json({
                message: 'there are some error with query',
                err: error
            })
        } else {


            res.json({
                status: 200,
                message: 'Deposit Succesfully.'

            })
        }
    });
}
module.exports.fienInstallment = function (req, res) {
    var today = new Date();

    var installment = {
        "loan_id": req.params.lid,
        "installment_amount": req.params.amt,
        "depositByID": req.cookies.user.id,
        "note": req.params.note,
        "installment_type": 2
    }
    connection.query('INSERT INTO INSTALLMENTS SET ?', installment, function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            res.json({
                status: 200,
                message: 'Deposit Succesfully.'
            })
        }
    });
}
module.exports.backupDone = function (req, res) {
    var today = new Date();


    connection.query('UPDATE BACKUP SET backup_mailed=1,backup_done=1', function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            res.redirect('/api/trackSession')

        }
    });
}
module.exports.updateForm = function (req, res) {
    var today = new Date();
    var fid = req.params.fid;
    var table_name = req.params.tname;
    var s_id = req.params.s_id;

    connection.query('UPDATE ' + table_name + ' SET ? WHERE summary_id=?', [req.body, s_id], function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            var msg = '';


            connection.query('CALL `getFormSubmitMsg`(' + fid + ');', function (error, results, fields) {
                {


                    msg = results[0][0].text;
                    res.json({
                        status: true,
                        data: results,
                        message: msg
                    })

                    //res.send(JSON.stringify(results));
                }
            });


        }
    });
}

module.exports.sendMessage1 = function (req, res) {
    var today = new Date();
    var fid = req.params.fid;
    var table_name = req.params.tname;

    msg = req.body.message_text;
    var class_ids = req.body.class_name;
    //console.log(class_ids);
    /*if (req.body.class_name.length > 2) {
        for (var i = 0; i < req.body.class_name.length; i++) {
            class_ids += req.body.class_name[i] + ",";


        }*/

    //}
    class_ids = class_ids.substr(0, class_ids.length - 1);
    //console.log(class_ids);
    connection.query("CALL queueMessage('" + class_ids + "','" + msg + "')", function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            connection.query("CALL `getSendMessage`()", function (error, results, fields) {
                if (error) {
                    res.json({
                        status: error,
                        message: 'there are some error with query'
                    })
                } else {
                    var msg = '';
                    /*for (var i = 0; i < results[0].length; i++) {
                        //console.log(results[0][i]);
                        const from = 'SUSSCHOOL'
                        const to = results[0][i].mob_number;
                        const text = results[0][i].msg_body;

                        //nexmosendSMS(from, to, text);
                        //sendSms(to, text);
                        //indianAPI();
                    }*/
                    var child = require('child_process').exec('python ./sendSMS.py');
                    child.stdout.pipe(process.stdout);
                    child.on('exit', function () {

                        }
                    );
                }
            });

            connection.query('CALL `getFormSubmitMsg`(' + fid + ');', function (error, results, fields) {
                {


                    msg = results[0][0].text;


                    res.json({
                        status: true,
                        data: results,
                        message: msg
                    })

                    //res.send(JSON.stringify(results));
                }
            });


        }
    });
}
module.exports.trackSession = function (req, res) {
    var today = new Date();


    //Check If is there any backup pending.
   /* connection.query('SELECT * FROM BACKUP WHERE backup_mailed=0 OR backup_done=0', function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {
            if (results.length > 0) {
                ///////////////////////////////////////////Create Backup //////////////////////////////////
                var mysqlDump = require('mysqldump');

                mysqlDump({
                    host: 'localhost',
                    user: 'root',
                    password: 'Jaskaran@12',
                    database: 'sus_finance',
                    dest: __dirname + '/data.sql' // destination file
                }, function (err) {
                    // create data.sql file;

                    //res.redirect('backupDone');
                });
                ////////////////////////////////////////end create backup/////////////////////////

                //////////////////////Start of Mailer ////////////////////////
                var nodemailer = require('nodemailer');

                var today = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ravdeeps3@gmail.com',
                        pass: ''
                    }
                });
                var attachments = [{
                    filename: 'SusServe_' + today + '.sql',
                    path: __dirname + '/data.sql',
                    contentType: 'plain/txt'
                }];

                var mailOptions = {
                    from: 'ravdeeps3@gmail.com',
                    to: 'ravdeeps3@gmail.com',
                    subject: 'SUS Server Database Backup ' + today,
                    text: 'Please find attached Backup SQL file.',
                    attachments: attachments
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        // res.redirect('backupDone');
                    } else {

                        /////////////////////Approve the pending backups/////////////////////////////////


                        connection.query('UPDATE BACKUP SET backup_mailed=1,backup_done=1', function (error, results, fields) {
                            if (error) {
                                res.json({
                                    status: error,
                                    message: 'there are some error with query'
                                })
                            } else {
                                // res.redirect('/api/trackSession')

                            }
                        });
                        ////////////////////////////End of MAiller /////////////////////////////

                        /////////////////////////////////////End of Approval//////////////////////////////

                    }
                });

            }

        }
    });
    ///////////////////////////////End of Backup////////////////////////

*/
    ////////////////////////////Start of login Session Tracing ///////////////////
    var log = {
        "token": req.cookies.logToken,
        "user_id": req.cookies.user.id

    }
    connection.query("EXEC S_generate_loginSession " + req.cookies.user.id+",'"+req.cookies.logToken+"'", function (error, results, fields) {
        if (error) {
            res.json({
                status: error,
                message: 'there are some error with query'
            })
        } else {

            res.redirect('/getNextPage/1');

        }
    });

    ////////////////////////////////End of Login Session Trace////////////////////////

}
module.exports.updateTrack = function (req, res) {
    var today = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    connection.query('UPDATE TRACKS,TRACKS_DETAIL,TRACK_TAGS SET TRACKS.track_name="' + req.body.tName + '",TRACKS.track_categoryID="' + req.body.tCategory + '",TRACKS.track_languageID=' + req.body.tLang + ',TRACKS.track_duration="' + req.body.tDuration + '",TRACKS.modified_date="' + today + '",TRACKS_DETAIL.album="' + req.body.alName + '",' +
        ' TRACKS_DETAIL.artist="' + req.body.arName + '",TRACKS_DETAIL.description="' + req.body.tDescription + '",TRACKS_DETAIL.genre="' + req.body.genre + '",TRACKS_DETAIL.lyrics="' + req.body.tLyric + '",TRACKS_DETAIL.year="' + req.body.tYear + '",TRACK_TAGS.tags="' + req.body.tTags + '",TRACK_TAGS.beat="' + req.body.tBeat + '",TRACK_TAGS.tempo="' + req.body.tTempo + '" WHERE TRACKS.track_id=' + req.body.tID + ' and TRACKS_DETAIL.track_id=' + req.body.tID + ' AND TRACK_TAGS.track_id=' + req.body.tID, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.json({
                status: true,
                data: results,
                message: 'user registered sucessfully'
            })
        }
    });
}
module.exports.addTrack1 = function (req, res) {
    var today = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    var lang = {
        "track_name": req.body.tName,
        "track_duration": req.body.tDuration,
        "track_categoryID": parseInt(req.body.tCategory),
        "track_languageID": parseInt(req.body.tLang),
        "modified_date": today,
        "modifiedByID": 12,
        "isActive": 1
    }


    connection.query('INSERT INTO TRACKS SET ?', lang, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                data: error,
                message: 'there are some error with query'
            })
        } else {
            var detail = {
                "track_id": results.insertId,
                "year": req.body.tYear,
                "genre": req.body.genre,
                "artist": req.body.arName,
                "album": req.body.alName,
                "description": req.body.tDescription,
                "lyrics": req.body.tLyric


            }
            var tag = {
                "track_id": results.insertId,
                "tags": req.body.tTags,
                "beat": req.body.tBeat,
                "tempo": req.body.tTempo,
            }
            connection.query('INSERT INTO TRACKS_DETAIL SET ?', detail, function (error, results, fields) {
                if (error) {
                    res.json({
                        status: false,
                        data: error,
                        message: 'there are some error with query'
                    })
                } else {
                    connection.query('INSERT INTO TRACK_TAGS SET ?', tag, function (error, results, fields) {
                        if (error) {
                            res.json({
                                status: false,
                                data: error,
                                message: 'there are some error with query'
                            })
                        } else {
                            res.json({
                                status: true,
                                data: results,
                                message: 'user registered sucessfully'
                            })
                        }
                    });


                }
            });
        }
    });
}

module.exports.uploadFile = function (req, res) {


}

/*
function sendSms(toNumber, msg) {


    var http = require('http');
    var ut = require('utf8');
    var urlencode = require('urlencode');
    msg = urlencode(ut.encode(msg));
//console.log(msg);
    var username = 'jasindersingh4@gmail.com';
    var hash = '4407c09093922dce7076fe44cd4b69cceaeb70ec9e843e7f823c819a4e3ca362'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
    var sender = 'txtlcl';
    var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + msg;
    var options = {
        host: 'api.textlocal.in', path: '/send?' + data,
        charset: 'utf-8'
    };
    callback = function (response) {
        var str = '';//another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
            console.log(str + '---------------------' + chunk["messages"]);
            try {
                var num = chunk.messages[0].recipient;
                num = reverse(num);
                num = num.substr(0, 10);
                num = reverse(num);

                console.log(num);
                updateMessageQueue(num);
                throw err
            } catch (err) {
                // handle the error safely
                OccurMessageError(chunk);

            }

        });//the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            //console.log(str);
        });
    }//console.log('hello js'))
    http.request(options, callback).end();//url encode instalation need to use $ npm install urlencode

}

function updateMessageQueue(num) {
    connection.query("CALL updateMessageQueue('" + num + "')", function (error, results, fields) {

    });
}

function OccurMessageError(err) {
    connection.query("CALL setMessageError('" + err + "')", function (error, results, fields) {
        console.log(error);
    });
}

function reverse(str) {
    var arr = [];

    for (var i = 0, len = str.length; i <= len; i++) {
        arr.push(str.charAt(len - i))
    }

    return arr.join('');
}

function nexmosendSMS(from, to, text) {
    nexmo.message.sendSms(from, to, encodeURI(text), (error, response) => {
        if (error) {
            throw error;
        } else if (response.messages[0].status != '0') {
            console.error(response);
            throw 'Nexmo returned back a non-zero status';
        } else {
            console.log(response);
        }
    });
}
*/
function indianAPI() {
    var j = {
        "username": "mydemo",
        "password": "123456",
        "from": "sus",
        "to": ["9653406905"],
        "text": "This is testing forjson data",
        "coding": "2",
        "flash": "1",
    }
    var request = require('request');
    console.log(j);
    var options = {
        uri: 'https://49.50.67.32/smsapi/jsonapi.jsp',
        method: 'POST',
        json: j
    };

    request(options, function (error, response, body) {

        console.log(body) // Print the shortened url.

    });

}