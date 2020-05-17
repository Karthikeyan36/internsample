var express=require('express');
var app=express();

var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening http://%s:%s",host,port)
})
app.get('/bike/:name',function(req,res){
    var name=req.params.name;
      var output;
     console.log(name);
     if(name=='rx'){
        output=name+" yamaha ";
     }else{
        output=name+" unknown ";
     } 
     res.end(JSON.stringify(output));
});