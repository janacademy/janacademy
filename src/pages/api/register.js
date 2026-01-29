import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    const { name, email, phoneNumber, course } = req.body.formData;

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
    });
  } catch (error) {
    console.error("Error sending registration:", error);

    return res.status(500).json({
      error: "❌ Failed to submit registration",
    });
  }
}
