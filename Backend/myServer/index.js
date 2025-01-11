import express from "express";

const app = express();

const port = 3002;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
   
    res.send('<img src="https://cdn.vox-cdn.com/thumbor/cY6f6QhlanusE6S4KDrfx7oAbk4=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg">');
});
app.get("/about", (req, res) => {
   res.send("<h1>About Me</h1>")
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
