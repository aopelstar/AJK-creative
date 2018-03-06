const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "tantoprecords@gmail.com",
        pass: "anabacon"
    }
});


app.get("/send", (req, res) => {
    var mailOptions ={
        to: "tantoprecords@gmail.com",
        from: "tantoprecords@gmail.com",
        subject: req.body.subject,
        content: req.body.text
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
               console.log(error);
           res.end("error");
        }else{
               console.log("Message sent: " + response.message);
           res.end("sent");
            }
   });
})




const port = 3030
app.listen(port, () => {
    console.log(`all is well on port ${port}`)
})