    var jwt=require('jsonwebtoken');
    var connection = require('../config/config');
    module.exports.authenticate=function(req,res){
        var email=req.body.email;
        var password=req.body.pass;
        //var h_id=req.body.h_id;
        connection.query("EXEC C_validate_user '"+email+"'", function (error, results, fields) {
          if (error) {
              res.json({
                status:error,
                message:'there are some error with query'
                })
          }else{

            if(results["recordset"].length >0){
                if(password==results["recordset"][0].password){
                    results["recordset"][0].password="";
                     const payload = {
      admin: results["recordset"][0]
    };

        var token = jwt.sign(payload,process.env.SECRET_KEY, {
          expiresIn : 60*60*60*24*24
        });


                var tokenCookie=req.cookies.logToken;
                if(!tokenCookie)
                {


                var date = new Date();
                date.setTime(date.getTime() + (60*60 * 1000));


                    res.cookie('logToken',token,{httpOnly:true,expires: date });
                    res.cookie('user',results["recordset"][0],{httpOnly:true,expires: date });



                }


                res.redirect('trackSession');
                   var message="Login Successful";

                }else{
                    res.redirect('/getNextPage/0/?toast=Email and password does not match');
                }

            }
            else{
                 res.redirect('/getNextPage/0/?toast=Email does not exits');


            }
          }
        });
    }