import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, address, message } = body;

    // Validate required fields
    if (!name || !phone || !service || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate Indian mobile number
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid mobile number" },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "care@garmento.in",
      subject: `New Enquiry from ${name} - Garmento Digital Laundry`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #142D4E; border-bottom: 2px solid #B89532; padding-bottom: 10px;">
            New Enquiry - Garmento Digital Laundry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E; width: 160px;">Full Name:</td>
              <td style="padding: 8px 0; color: #414B56;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E;">Mobile Number:</td>
              <td style="padding: 8px 0; color: #414B56;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E;">Email:</td>
              <td style="padding: 8px 0; color: #414B56;">${email || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E;">Service Required:</td>
              <td style="padding: 8px 0; color: #414B56;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E;">Pickup Address:</td>
              <td style="padding: 8px 0; color: #414B56;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E;">Message:</td>
              <td style="padding: 8px 0; color: #414B56;">${message || "None"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #142D4E;">Submitted At:</td>
              <td style="padding: 8px 0; color: #414B56;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}