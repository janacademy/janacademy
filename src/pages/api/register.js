import dbConnect from "../../utils/db";
import Register from "../../models/Register";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    await dbConnect();

    const { name, email, phoneNumber, course } = req.body.formData;

    const newEntry = await Register.create({
      name,
      email,
      phoneNumber: phoneNumber,
      course,
    });
    // 📩 Send Email To Admin
    await resend.emails.send({
      from: "Jan Academy <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "📥 New Registration Received",
      html: `
        <h2>New Registration Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phoneNumber}</p>
        <p><b>Course:</b> ${course}</p>
        <br />
        <p>Regards,<br/>Jan Academy Registration System</p>
      `,
    });
    return res.status(201).json({
      message: "✅ Registration Successful!",
      data: newEntry,
    });
  } catch (error) {
    console.error("Error creating entry:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        error: "❌ Email or Phone already exists!",
      });
    }

    return res.status(500).json({
      error: "❌ Something went wrong",
    });
  }
}
