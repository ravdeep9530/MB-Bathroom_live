var express = require('express');

var app = express();
var formidable = require('formidable');




var fs=require('fs');
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var router=express.Router();
app.use('/secure-api',router);
//session
var session = require('express-session');
app.use(session({
    secret: 'ravdeep',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 60 * 1000 //1 minute
      }

}));
//create a cors middleware
app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

app.set('superSecret',"RAVDEEP"); // secret variable
process.env.SECRET_KEY="RAVDEEP";
app.use(express.static(__dirname + '/public'));
var insertController=require(__dirname+'/controllers/insertController');
var fetchController=require(__dirname+'/controllers/fetchController');
var authenticateController=require(__dirname+'/controllers/authenticateController');
var config=require(__dirname+'/config/config');
//Web
app.get('/', function(req, res) {

    res.render('index', {
       g_c: req.cookies.global_cache
    });
  });


//-----start--------

app.get('/admin',fetchController.getStart);
//----------start end----
app.get('/login', function(req, res) {

  res.render('adminlogin', {
     g_c: req.cookies.global_cache
  });
});
app.get('/underMainetence', function(req, res)
{
    res.render('underMainetence');
});


app.get('/report/:hid?', function(req, res) {
    res.render('report', {
        title: 'Admin Login',
        h_id:req.params.hid
    });
});
app.get('/temp', function(req, res) {
    res.render('music', {
        title: 'MUSIC'
    });
});
app.get('/getGalleryList',fetchController.getGalleryList);
app.get('/getFeedbackList',fetchController.getFeedbackList);
app.get('/getNextPage/:page_id/?*',fetchController.getNextPage);
app.get('/getIsolateReport/:h_id',fetchController.getIsolateReport);
app.get('/resetPassword/:hash',fetchController.resetPassword);

app.get('/resetPasswordPage/:hash',function (req,res) {
   res.render('resetPassword',{hash:req.params.hash,
    g_c: req.cookies.global_cache});
});
//ForgetPassword
app.get('/forgetPassword',function (req,res) {
    res.render('forgetPassword',{
     g_c: req.cookies.global_cache
  });
});
app.get('/generatePassword',function (req,res) {
    res.render('generatePassword',{
     g_c: req.cookies.global_cache
  });
});
//NonSSO Forms
app.post('/nonSSO_insertForm/:fid/:nextPage_id',insertController.nonSSO_insertForm);


app.post('/nonSSO_updateForm/:fid/:nextPage_id',insertController.nonSSO_updateForm);

app.post('/api/authenticate',authenticateController.authenticate,function (req,res) {

});//Authentication



router.use(function(req,res,next){
    var token=req.body.token || req.headers['token'] || req.cookies.logToken;
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,function(err,res){
            if(err){
                res.status(500).send('Token Invalid');
            }else{

                next();
            }
        })
    }else{
       // res.send('Please send a token')
        res.redirect('/');
    }
});

router.get('/dashboard', function(req, res) {
    console.log(req.cookies.user.role_name);

 res.render('dashboard', {
        user: req.cookies.user,
        dp: req.cookies.dp,
        g_c:req.cookies.global_cache
    }   );


});


router.get('/getNextPage/:page_id',fetchController.getNextPage);
router.get('/getTabs',fetchController.getTabs);
router.get('/getForms',fetchController.getForms);
//router.get('/getTodayActivity',fetchController.getTodayActivity);
router.get('/getStatupMethodLoader',fetchController.getStatupMethodLoader);
router.get('/getFormsByID/:id',fetchController.getFormsByID);
//router.get('/getSearchBymob_bid/:bid',fetchController.getSearchBymob_bid);
//router.get('/getRoomDetailByRoomID_temp/:r_id',fetchController.getRoomDetailByRoomID_temp);
//router.get('/getLastTenBookingTransactions/:h_id',fetchController.getLastTenBookingTransactions);
//router.get('/getToltipForRooms/',fetchController.getToltipForRooms);
//router.get('/getBookindDetailBySummaryID/:s_id',fetchController.getBookindDetailBySummaryID);
router.get('/getL_fieldByname/:fname',fetchController.getL_fieldByname);
router.get('/getSetting',fetchController.getSetting);
router.get('/ssoGetGalleryList',fetchController.getGalleryList);
//router.get('/getReports/:id&:f_date&:t_date&:h_id',fetchController.getReports);
//router.get('/getRoomsByCategoryID/:c_id&:d_date',fetchController.getRoomsByCategoryID);
//router.get('/getRoomDetailByRoomID/:r_id',fetchController.getRoomDetailByRoomID);
router.get('/api/trackSession',insertController.trackSession);
router.post('/insertForm/:fid&:tname',insertController.insertForms);
router.post('/updateForm/:fid&:tname&:s_id',insertController.updateForm);
router.post('/sendMessage/:fid&:tname',insertController.sendMessage1);
router.get('/backupDone',insertController.backupDone);
router.post('/fileupload',function (req, res, next) {
    var rn = require('random-number');
var gen = rn.generator({
  min:  100
, max:  1000000000
, integer: true
})


    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var rand=gen();
      var newpath = __dirname+'/public/uploads/'+rand+'.'+ files.filetoupload.name.split('.')[1];
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
var dpCookie=req.cookies.dp;

                    res.cookie('dp','uploads/'+rand+'.'+ files.filetoupload.name.split('.')[1],{maxAge:900000,httpOnly:true});

        res.redirect('/dashboard');
      });
 });

});
//logout
router.get('/logout', function(req, res) {
    res.clearCookie('logToken');
    res.redirect('/');
});
app.use('/',router);


app.listen(80);
