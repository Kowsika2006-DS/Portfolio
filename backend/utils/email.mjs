import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {

  const mailOptions = {
    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    replyTo: email,

    subject: `Portfolio Contact: ${subject}`,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: auto;
        padding: 30px;
        background: #0b0f19;
        color: #ffffff;
        border-radius: 16px;
      ">

        <h2 style="
          color: #00d9ff;
          margin-bottom: 25px;
        ">
          New Portfolio Message 🚀
        </h2>

        <div style="
          background: #111827;
          padding: 20px;
          border-radius: 12px;
        ">

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p style="
            line-height: 1.7;
            color: #d1d5db;
          ">
            ${message}
          </p>

        </div>

        <p style="
          margin-top: 25px;
          color: #9ca3af;
          font-size: 13px;
        ">
          This message was sent from Kowsika J's portfolio website.
        </p>

      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};