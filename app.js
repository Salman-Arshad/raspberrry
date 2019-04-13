const app = require("express")();
const bodyparse = require('body-parser');
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));
var mysql = require('mysql');
app.listen(5000,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("server listenimg");
    }
    
});
app.get("/",(req,res)=>{
    var data=[]
    conn.query("select * from readings",function(err,resu){
        resu.forEach(function(element) {
            data.push(element.data)
        });
        res.send(data)
    })
})
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tester',
  });
  conn.connect(function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connected to zybase');
  });
app.post("/",(req,res)=>{
    res.send(req.body.data);
    console.log(req.body)
})
 