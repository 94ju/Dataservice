const express=require("express");
const app=express();
const fetch=require("node-fetch");


app.get('/statetocode/:state',async(req,res)=>{
    const state= req.params.state;
    const stateset=await fetch('http://localhost:3000/getstate');
    const jsonstate =await stateset.json();
    const code= jsonstate.find(element=>element.name===state).abbreviation;
    res.send(code);
});

app.get('/codetostate/:code',async(req,res)=>{
    const code = req.params.code;
    const codeset = await fetch('http://localhost:3000/getcode');
    const jsoncode =await codeset.json();
    const state =await jsoncode[code];
    res.send(state);
});

app.listen(3001);