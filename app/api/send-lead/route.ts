

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, city, course } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"NIET Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL, // client email
      subject: `New Lead: ${name} — ${course}`,
      html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="background:#00648f;padding:24px 28px;">
          <h2 style="color:#fcc423;margin:0;font-size:20px;">New Admission Enquiry</h2>
          <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px;">NIET UG / PG Admissions 2026</p>
        </div>
        <div style="padding:24px 28px;background:#fff;">
          
          <p><b>👤 Name:</b> ${name}</p>
          <p><b>✉️ Email:</b> ${email}</p>
          <p><b>📞 Phone:</b> ${phone}</p>
          <p><b>📍 City:</b> ${city}</p>
          <p><b>🎓 Course:</b> ${course}</p>

        </div>
        <div style="background:#f9fafb;padding:14px 28px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">Submitted via admissions form</p>
        </div>
      </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}