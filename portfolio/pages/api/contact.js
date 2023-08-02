import nodemailer from "nodemailer";

export default async function ContactApi(req, res) {
  const { name, email, subject, message } = req.body;

  const data = {
    name,
    email,
    subject,
    message,
  };

  const user = process.env.user;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: "soranraofdev@gmail.com",
      replyTo: email,
      subject: subject,
      html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${subject}</p>
      <p>${message}</p>
      `,
    });
    console.log("message sent", mail.messageId);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error sending message. Please try again later" });
  }
}
