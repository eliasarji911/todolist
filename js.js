const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.json());
app.use(express.static(path.json(__dirname)));

const todo = [];

let nextid = 1;

app.get('/',(req,res) =>{

res.sendFile(__dirname +'/html.html')
});

app.get('/s',(req,res)=>{
   res.status(200).json(todo)
});

app.post('/s',(req,res)=>{

    let text = req.body.txt;
    if (!text){
        return res.status(400).json({message: "text cannot be empty"})
    }

    let isdone = false;
    let id = nextid++;

    
    let task = {id,text, isdone};
    todo[id] = task;

   res.status(201).json({message:"ok"})
});

app.delete('/s/:id',(req,res)=>{
    let id = parseInt(req.params.id);

    if (id < 0 || todo.length < id){
        return res.status(400).json({message:"not found"})
    }

    delete todo[id];

    res.json({ message:"Task deleted" });
   
});

app.get('/s/:id',(req,res)=>{
    let id = req.params.id;

     if (id < 0 || todo.length < id || todo[id] == null){
        return res.status(400).json({message:"not found"})
    }

    let obj = todo[id];
    res.json(obj);
});

app.patch('/s/:id',(req,res)=>{
    let id = req.params.id;
     if (id < 0 || todo.length < id || todo[id] == null){
        return res.status(400).json({message:"not found"})
    }
///  
///
    let text = req.body.txt;
     if (!text){
        return res.status(400).json({message: "text cannot be empty"})
    }

    let obj = todo[id];
    obj.text = text;


    res.json(todo[id]);
});


app.patch('/s/:id',(req,res)=>{
    let id = req.params.id;
     if (id < 0 || todo.length < id || todo[id] == null){
        return res.status(400).json({message:"not found"})
    }

    let isdone = req.body.isdone;
    if (isdone != undefined){

        todo[id].isdone = isdone;

    }


    let text = req.body.txt;
     if (text){
        todo[id].text = text;
    }

    res.json(todo[id]);
});


app.listen(port,()=>(console.log(`http://localhost:${port}`)));