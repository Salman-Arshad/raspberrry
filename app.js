const app = require('express')();
const bodyparse = require('body-parser');
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));
var mysql = require('mysql');
app.listen(5000, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('server listenimg');
  }
});
app.get('/', function(req, res) {
  var data = [];
  conn.query('select * from readings', function(err, resu) {
    resu.forEach(function(element) {
      data.push(element.data);
    });
    res.send(data);
  });
});
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ItIbjek4',
  database: 'decibelreadings',
});
// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tester',
//   });
conn.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to zybase');
});
app.post('/', function(req, res) {
    console.log(typeof(req.body.data))
    conn.query("INSERT INTO readings (id, data) VALUES (NULL,'"+req.body.data+"');",function(err,resu){
        if(err)console.log(error);


    })
});
