import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, mobile, membership, qid } = await request.json();

    if (!email || !mobile) {
      return NextResponse.json(
        { error: 'Email and Mobile number are required.' },
        { status: 400 }
      );
    }

    const recipient = 'info@qfitgymqatar.com';
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Qatar' });

    let sent = false;
    let methodUsed = '';

    // Method 1: Hostinger SMTP (if SMTP_PASSWORD is provided in environment variables)
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpUser = process.env.SMTP_USER || recipient;
    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

    if (smtpPassword) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPassword,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; background-color: #f7f9fa; padding: 30px; color: #222;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-top: 4px solid #e60026;">
              <div style="padding: 25px 30px; background-color: #050505; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">QFIT GYM QATAR</h1>
                <p style="color: #0066cc; margin: 5px 0 0; font-size: 14px; font-weight: bold;">NEW APPOINTMENT BOOKING</p>
              </div>
              <div style="padding: 30px;">
                <p style="font-size: 16px; margin-top: 0;">You have received a new appointment booking request from your website:</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <tr style="background-color: #f2f5f8;">
                    <td style="padding: 12px 15px; font-weight: bold; width: 40%; border-bottom: 1px solid #e1e8ed;">Email ID</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #e1e8ed;"><a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; font-weight: bold; border-bottom: 1px solid #e1e8ed;">Mobile Number</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #e1e8ed;"><a href="tel:${mobile}" style="color: #222; text-decoration: none;">${mobile}</a></td>
                  </tr>
                  <tr style="background-color: #f2f5f8;">
                    <td style="padding: 12px 15px; font-weight: bold; border-bottom: 1px solid #e1e8ed;">Membership Number</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #e1e8ed;">${membership || 'Not Provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; font-weight: bold; border-bottom: 1px solid #e1e8ed;">QID Number</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #e1e8ed;">${qid || 'Not Provided'}</td>
                  </tr>
                  <tr style="background-color: #f2f5f8;">
                    <td style="padding: 12px 15px; font-weight: bold;">Booking Time</td>
                    <td style="padding: 12px 15px;">${timestamp} (Qatar Time)</td>
                  </tr>
                </table>
                <div style="margin-top: 30px; text-align: center;">
                  <a href="https://wa.me/${mobile.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; font-size: 14px;">Chat with Customer on WhatsApp</a>
                </div>
              </div>
              <div style="background-color: #f2f5f8; padding: 15px 30px; text-align: center; font-size: 12px; color: #777;">
                Sent automatically by QFit Gym Website Booking System.
              </div>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"QFit Gym Website" <${smtpUser}>`,
          to: recipient,
          replyTo: email,
          subject: `🏋️ New Appointment Booking: ${email} (${mobile})`,
          html: htmlContent,
        });

        sent = true;
        methodUsed = 'Hostinger SMTP';
      } catch (smtpErr) {
        console.error('SMTP send error (falling back to FormSubmit):', smtpErr);
      }
    }

    // Method 2: FormSubmit.co direct dispatch to info@qfitgymqatar.com
    if (!sent) {
      try {
        const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) QFitGym-System',
            'Origin': 'https://qfitgymqatar.com',
            'Referer': 'https://qfitgymqatar.com/booking',
          },
          body: JSON.stringify({
            _subject: `New Appointment Booking: ${email} (${mobile})`,
            'Client Email': email,
            'Mobile Phone': mobile,
            'Membership Number': membership || 'Not Provided',
            'QID Number': qid || 'Not Provided',
            'Date Submitted': `${timestamp} (Qatar Time)`,
            _template: 'table',
          }),
        });

        const fsData = await formSubmitRes.json();
        sent = true;
        methodUsed = 'FormSubmit';
        console.log('FormSubmit dispatched successfully:', fsData);
      } catch (fsErr) {
        console.error('FormSubmit error:', fsErr);
      }
    }

    return NextResponse.json({
      success: true,
      delivered: sent,
      method: methodUsed,
      recipient,
    });
  } catch (error) {
    console.error('Server error in /api/send-booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking email notification' },
      { status: 500 }
    );
  }
}
