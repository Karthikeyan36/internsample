var express=require('express');
var app=express();

var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening http://%s:%s",host,port)
})
app.get('/Whoami/:name',function(req,res){
    var name=req.params.name;
      var output;
     console.log(name);
     if(name=='jey'){
        output=name+" nec alumini ";
     }else{
        output=name+" unknown ";
     } 
     res.end(JSON.stringify(output));
}); 
app.get('/student',function(req,res){

   const data = file.readFileSync('student.json');
   const dataStr = JSON.parse(data);
   res.end( JSON.stringify(dataStr));
 
 });
 
 app.post('/add',function(req,res){
 
   const student  = req.body;
   console.log('Adding new student: ', student);
 
   res.end( JSON.stringify("students updated successfully"));
 
 });