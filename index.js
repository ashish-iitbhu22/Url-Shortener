const express = require('express');
const {connectToDatabase} = require("./connnection")
const router = require("./routes/url")
const cors = require("cors");

const PORT = 8001;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

connectToDatabase("mongodb://127.0.0.1:27017/ashish-project").then(res=>{
    console.log("Mongo connected")
})

app.use("/url", router);

app.listen(PORT,()=>{
    console.log(`Serever started at PORT ${PORT}`);
})