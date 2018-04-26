var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "mrandol8",
  password: "mrandol8@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET users listing. */
router.get('/study_session', function(req, res, next) {
  con.query("SELECT * FROM mrandol8.study_session", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post study_session data. */
router.post('/study_session', function(req, res, next) {
  var sql = con.query("INSERT INTO mrandol8.study_session set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    // res.send(result);
    res.json({"status": "OK"}); // your own
  });
});

/*GET customers*/
router.get('/customer', function(req, res, next) {
  con.query("SELECT * FROM mrandol8.customer", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;



/* Post study_session data. */
router.post('/study_session', function(req, res, next) {
  var sql = con.query("INSERT INTO mrandol8.study_session set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    // res.send(result);
    res.json({"status": "OK"}); // your own
  });
});

/*GET customers*/
router.get('/customer', function(req, res, next) {
  con.query("SELECT * FROM mrandol8.customer", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;

