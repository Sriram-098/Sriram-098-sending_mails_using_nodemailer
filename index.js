var nm = require("nodemailer");
var transport = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587, 
    secure: false,
    auth: {
        user: "sriramsenapathi842@gmail.com",
        pass: "btwc irto ftip fioc" 
    }
});

var options = {
    from: "sriramsenapathi842@gmail.com",
    to: "senapathisriram.22.csm@anits.edu.in",
    subject: "Sending mail using express",
    //if we sent the text then we use text other than html
    //text:"this is the format we use if we use text then dont use html if we use html then dont use text"
    html:`<h1>hello sriram</h1>
          <p>this is the html file using nodemailer</p>`
};

transport.sendMail(options, (err, data) => {
    if (err) {
        console.error("Error occurred:", err);
    } else {
        console.log("Email sent successfully:", data);
    }
});