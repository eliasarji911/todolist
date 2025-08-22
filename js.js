const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

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
    let id = nextid++;

    
    let task = {id,text};
    todo[id] = task;

   res.status(201).json({message:"ok"})
});

app.delete('/s/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    if (id < 0 || todo.length < id){
        return res.status(400).json({message:"not found"})
    }

    delete todo[id];

    res.json({ message:"Task deleted" });
   
});



app.listen(port,()=>(console.log(`http://localhost:${port}`)));