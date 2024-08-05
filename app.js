if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}


const express = require("express");
const app = express();
const nodeMailer = require("nodemailer");
const path = require("path");
const port = 8000;




app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req,res) => {
  res.render("index.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// app.get("/home",(req,res) => {
//   res.render("index.ejs");
// });
app.get("/services",(req,res) => {
  res.render("services.ejs");
});


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send-email", async (req, res) => {
 
  const { name, email, message } = req.body;

  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL ,
    to: process.env.TO,
    subject: "New Message from Your Website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    alert("Your Query is Submitted Thank You!")
    
    
    
    
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});


app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});
