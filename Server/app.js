// import   
const express = require('express');
const morgan = require('morgan');
const port  = 8080;
const routes = require('./routes/index');
const pool = require('./config/connectDB')

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
pool.getConnection(async function (err, connection) {
    if (err instanceof Error) {
      console.log(err);
      return;
    }
    console.log(`connection database   sucessfully `)
    connection.release();
  });
app.listen(port,()=>{  
    console.log(`listening sucessful port ${port}`)
})
