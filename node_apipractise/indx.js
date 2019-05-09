const express = require('express');
const fetch = require('node-fetch');
const app =express();

const statetocodeUrl="https://gist.githubusercontent.com/PhantomGrin/a1e8ad30915ecd9d2659400d496d1ed6/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json";
const codetostateUrl="https://gist.githubusercontent.com/PhantomGrin/a1e8ad30915ecd9d2659400d496d1ed6/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

app.get('/statetocode',async(req,res)=>{
    const statetocodeData= await fetch(statetocodeUrl);
    const jsonobject = await statetocodeData.json();
    res.send(console.log(jsonobject));
});

app.get('/codetostate',async(req,res)=>{
    const codetostateData = await fetch(codetostateUrl);
    const jsonobject=await codetostateData.json();
    res.send(console.log(jsonobject));
})

app.listen(3000);