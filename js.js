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



app.listen(port,()=>(console.log(`http://localhost:${port}`)));