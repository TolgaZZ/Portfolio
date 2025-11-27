import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
// Temporarily comment out React Email to test basic functionality
// import { render } from '@react-email/render';
// import ContactFormEmail from '../../../../emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create email template matching website's exact grid and gradient styling
    const emailHtml = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Portfolio Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #000000; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
          <!-- Grid background pattern matching your website -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000; background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 20px 20px; padding: 0;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000;">
                  
                  <!-- Header with gradient and subtle grid pattern -->
                  <tr>
                    <td style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 69, 19, 0.1) 25%, rgba(0, 0, 0, 0.3) 50%, rgba(59, 130, 246, 0.1) 75%, rgba(139, 69, 19, 0.1) 100%); background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); background-size: 24px 24px; padding: 48px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                      <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; letter-spacing: -0.02em; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">
                        Portfolio Contact
                      </h1>
                      <p style="color: rgba(255, 255, 255, 0.7); font-size: 18px; margin: 16px 0 0 0; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                        New message from tolgazorlu.nl
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Main Content matching your website's dark style -->
                  <tr>
                    <td style="padding: 48px; background-color: rgba(0, 0, 0, 0.9);">
                      
                      <!-- Contact cards with clean styling -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px;">
                        <tr>
                          <td style="width: 48%; padding-right: 12px; vertical-align: top;">
                            <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 28px; backdrop-filter: blur(10px);">
                              <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1.5px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">From</p>
                              <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">${name}</p>
                            </div>
                          </td>
                          <td style="width: 48%; padding-left: 12px; vertical-align: top;">
                            <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 28px; backdrop-filter: blur(10px);">
                              <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1.5px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">Email</p>
                              <p style="color: #3b82f6; font-size: 16px; margin: 0; font-weight: 500; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">${email}</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- Subject with clean styling -->
                      <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 28px; margin-bottom: 32px; backdrop-filter: blur(10px);">
                        <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1.5px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">Subject</p>
                        <p style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 600; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.3;">${subject}</p>
                      </div>

                      <!-- Message with clean container -->
                      <div style="margin-bottom: 40px;">
                        <p style="color: rgba(255, 255, 255, 0.6); font-size: 12px; font-weight: 600; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1.5px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">Message</p>
                        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 32px; backdrop-filter: blur(10px);">
                          <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; line-height: 1.7; margin: 0; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; white-space: pre-wrap;">${message}</p>
                        </div>
                      </div>
                      
                      <!-- Reply button with clean styling -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center" style="padding: 24px 0;">
                            <table border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 18px 36px; box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);">
                                  <a href="mailto:${email}?subject=Re: ${subject}" style="color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                                    Reply to ${name} →
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer with grid pattern -->
                  <tr>
                    <td style="background: rgba(0, 0, 0, 0.9); padding: 32px 48px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                      <p style="color: rgba(255, 255, 255, 0.6); font-size: 14px; margin: 0; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                        Sent via tolgazorlu.nl • Portfolio Contact Form
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev", // Use sandbox domain while your domain verifies
      to: "tolga.z@outlook.com", // Your email where you want to receive messages
      replyTo: email, // The sender's email for easy replies
      subject: `Portfolio Contact: ${subject}`,
      html: emailHtml,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return NextResponse.json(
        { error: emailResponse.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: emailResponse.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
