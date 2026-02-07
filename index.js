const express = require("express")
const cors = require("cors")
require("dotenv").config()
const bodyParser = require("body-parser")
const productRouter = require("./router/product.routes")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs")
app.use(express.static("public"))
const PORT = process.env.PORT || 3000



// router


app.use(productRouter)

app.listen(PORT, () =>{
    console.log(PORT);
    
})