const express = require('express');
const productsRouter = require("./routes/product");
const mongoose =require("mongoose");
const bodyparser = require('body-parser');
require("dotenv/config");
const cors = require('cors');

const app = express();
// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//cors middleware
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DATABASE_NAME}.hodv01e.mongodb.net/?retryWrites=true&w=majority`,
e => {
    if(e){
        console.log("An error accured while connecting mongoDB")
        console.log(e);
    }else{
        console.log(`Connected to ${process.env.DATABASE_NAME} database as an ${process.env.USERNAME}`)
    }
})

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.use('/products',productsRouter)

app.listen(5000, ()=> {
    console.log("Server is running on port 5000")
})

