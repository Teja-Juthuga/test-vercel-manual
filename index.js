const express = require("express")

const products = require("./products.json")
const app = express()

app.get("/api/products", (req,res)=>{
    res.send(products);
})

app.listen(8081, ()=> {
    console.log("http://localhost:8081")
})