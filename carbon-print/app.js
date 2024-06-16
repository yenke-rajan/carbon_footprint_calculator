require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
require('express-async-errors');


const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');
const points = require('./routes/points');
const auth = require('./routes/auth');
const routeNotFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Store api</h1><a href= "/api/v1/points">route</a>`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
));


// Routes
app.use("/api/v1/points",authenticateUser,points);
app.use("/auth",auth);

app.use(routeNotFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT;


const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("DB connection sucessfull");
        app.listen(port,()=>{
            console.log(`App listening at port ${port}`);
        });
    }catch(e){
        console.log(e);
    }
}

start();


