import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({extend: true}))
var bandName = "";
const customLogger = (req, res, next) => {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"]
  next()
}

app.use(customLogger)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});
app.post("/submit", (req, res) => {
  res.send(`<h1>${bandName}🙌</h1>`)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
