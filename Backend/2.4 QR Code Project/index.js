
//1. Use the inquirer npm package to get user input.
import inquirer from "inquirer";
import qr from "qr-image"
import fs, { writeFile } from "fs"
inquirer
.prompt([
    {
        message: "Type in your URL:",
        name: "URL",


    }
])
.then((answer) => {
   const url = answer.URL;
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));


   writeFile("URL.txt", url, (err) => {
    if(err) throw err;
    console.log("This file has been saved")
   })
})
.catch((error) => {
    if(error.isTryError){
       console.log("You enter an invalid URL")
    }
})
//2. Use the qr-image npm package to turn the user entered URL into a QR code image.

//3. Create a txt file to save the user input using the native fs node module.











