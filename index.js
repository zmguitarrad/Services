const express = require("express")
const app = express()
const bodyParser =require("body-parser")
const cors=require('cors')

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//cors
app.use(cors())

//routes 
app.use(require("./routers/index"))
app.use(require("./routers/category"))

//Execution 
app.get('/',(req, res) => {res.send("Welcome to Web Service ")})

app.listen(process.env.PORT || 3000)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
console.log("Server running in http://localhost:3000")
