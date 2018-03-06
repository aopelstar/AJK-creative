const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use( express.static( `${__dirname}/../build` ) ); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html') ); 
})




const port = 3003
app.listen(port, () => {
    console.log(`all is well on port ${port}`)
})