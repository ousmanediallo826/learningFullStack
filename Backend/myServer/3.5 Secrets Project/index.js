//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express()
const port = 3009;
//Send the data first width bodyParse middleware

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
const password = "ILoveProgramming"
app.use(bodyParser.urlencoded({extend: true}))

const logger = (req, res, next) => {
   console.log(req.body)
   if(password === req.body["password"]){
    res.sendFile(__dirname + "/public/secret.html");
   }
   else {
    res.status(401).send("<h1>Unauthorized: Incorrect Password.</h1>")
   }
  
}
app.use(logger)



app.post("/submit", logger, (req, res) => {
    res.sendFile(__dirname + "/public/secret.html")
})




app.listen(port, () => {
    console.log("server is listening at port: ", port)
})

