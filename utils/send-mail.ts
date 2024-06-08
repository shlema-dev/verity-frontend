const nodemailer = require("nodemailer");

export async function sendMail(
  firstName: string,
  lastName: string,
  email: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Website Contact Form",
      address: process.env.SENDER,
    }, // sender address
    to: process.env.SENDER, // list of receivers
    subject: `Contact from ${firstName} ${lastName}`,
    text: message,
    html: `<p><b>Name of sender:</b> ${firstName} ${lastName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>`,
  };

  try {
    console.log("Trying to send with NodeMailer transporter...");
    await transporter.sendMail(mailOptions);
  } catch (error: any) {
    console.log("Failed to send mail with nodemailer!");
    console.log(error.message);
    throw new Error(error.message);
  }
}
