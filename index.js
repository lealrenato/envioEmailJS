const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

let mailTrasnporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "renatolealhiss@gmail.com",
    pass: "",
  },

  tls: {
    rejectUnauthorized: false,
  },
});

let detalhes = {
  from: "renatolealhiss@gmail.com",
  to: "renatolealhiss@gmail.com",
  subject: "teste",
  text: "senha renatolealhiss@gmail.com gnrlyeuxsrhpieph",
};

mailTrasnporter.sendMail(detalhes, (err) => {
  if (err) {
    console.log("erro ocurrido", err);
  } else {
    console.log("email enviado");
  }
});
