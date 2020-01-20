var express = require('express');
var app =express();
var body = require('body-parser');
app.use(body.json());
app.listen(3000);
console.log("Server Started")
const mongoClient =require('mongodb').MongoClient;
client = mongoClient('mongodb://localhost:27017',{useNewUrlParser:true});


app.post("/insert", (req,res)=>{
    client.connect((err)=>{
        console.log(req.body);
        client.db('tarkeshwar').collection('employee').insert(req.body,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(result)
                res.send({result:"Inserted data"})
            }
        })
    
    })

})

app.get("/getdata", (req,res)=>{
    client.connect(err=>{
        client.db('tarkeshwar').collection('employee').find().toArray((err,result)=>{
            console.log(result)
            res.send(result)
        })

    })
})

app.post("/update", (req,res)=>{
    console.log(req.body[0]);
    console.log(req.body[1]);
    client.connect((err)=>{
        client.db('tarkeshwar').collection('employee'),updateOne(req.body[0],req.body[1],(err,result)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send({result:"updayed successfully"})
            }
        })

    })
})