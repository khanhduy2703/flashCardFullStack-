// import   
const express = require('express');
const morgan = require('morgan');
const port  = 8080;
const routes = require('./routes/index');
const connection = require('./config/connectDB')

// create aap express
const app = express();
// HTTP logger 
app.use(morgan('dev'));
//config  req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// init routes
routes(app);
app.use((req,res)=>{
    res.status(404).send(
        "not found 404 "
    )
})
// listening port 

app.listen(port,()=>{  
    console.log(`listening sucessful port ${port}`)
})
