import Contact from "../models/Contact.mjs";
import { sendContactEmail } from "../utils/email.mjs";


export const sendMessage = async (
  req,
  res,
  next
) => {

  try {

    const {
      name,
      email,
      subject,
      message,
    } = req.body;


    // =========================================
    // VALIDATION
    // =========================================

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    }


    // =========================================
    // SAVE TO DATABASE
    // =========================================

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });


    // =========================================
    // SEND EMAIL
    // =========================================

    try {

      await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      console.log(
        "📩 Contact email sent successfully"
      );

    } catch (emailError) {

      console.error(
        "⚠️ Email sending failed:",
        emailError.message
      );

    }


    // =========================================
    // RESPONSE
    // =========================================

    res.status(201).json({

      success: true,

      message:
        "Message sent successfully! I'll get back to you soon.",

      data: contact,

    });


  } catch (error) {

    next(error);

  }

};


export const getMessages = async (
  req,
  res,
  next
) => {

  try {

    const messages =
      await Contact.find()
        .sort({
          createdAt: -1,
        });


    res.status(200).json({

      success: true,

      count: messages.length,

      data: messages,

    });


  } catch (error) {

    next(error);

  }

};