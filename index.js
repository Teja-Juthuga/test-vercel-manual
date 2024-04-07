const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    res.send("Home Page");
})

app.listen(8081, ()=> {
    console.log("http://localhost:8081")
})