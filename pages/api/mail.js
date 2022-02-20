// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  Date and Time: ${body.datetime}
  `;

  const data = {
    to: "christopher.cooper@mail.com",
    // Configured in SendGrid with Single Sender Verification
    from: `ccooper505@gmail.com`,
    subject: "New Message",
    test: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  sgMail.send(data);
  res.status(200).json({ status: "OK" });
}
