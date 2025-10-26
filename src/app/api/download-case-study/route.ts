import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Email service configuration (same as contact form)
const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL || 'https://api.resend.com/emails';
const EMAIL_API_KEY = process.env.EMAIL_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL || 'devteam@clean-earth.org';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@clean-earth.org';

export async function POST(request: NextRequest) {
  try {
    const { name, email, caseStudySlug, caseStudyTitle } = await request.json();

    // Validate required fields
    if (!name || !email || !caseStudySlug || !caseStudyTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Map case study slugs to PDF file paths and download names
    const pdfMappings: Record<string, { path: string; filename: string }> = {
      'dairy-queen-clean-energy-community-solar': {
        path: '/assets/pdfs/CER Case Study Web Download - Subscriber Spotlight - DQ.pdf',
        filename: 'CER Case Study Web Download - Subscriber Spotlight - DQ.pdf'
      },
      'ks-tire-recycling-case-study': {
        path: '/assets/pdfs/CER Case Study Web Download - Subscriber Spotlight - K&S Tire Recycling.pdf',
        filename: 'CER Case Study Web Download - Subscriber Spotlight - K&S Tire Recycling.pdf'
      },
      'humans-at-help-foundation-case-study': {
        path: '/assets/pdfs/CER Case Study Web Download - Subscriber Spotlight- Humans at Help Foundation.pdf',
        filename: 'CER Case Study Web Download - Subscriber Spotlight- Humans at Help Foundation.pdf'
      },
      'maple-and-ash-restaurant-case-study': {
        path: '/assets/pdfs/CER Case Study Web Download - Subscriber Spotlight - Maple & Ash.pdf',
        filename: 'CER Case Study Web Download - Subscriber Spotlight - Maple & Ash.pdf'
      },
      'hampton-inn-rockford-case-study': {
        path: '/assets/pdfs/CER Case Study Web Download - Subscriber Spotlight - Hilton.pdf',
        filename: 'CER Case Study Web Download - Subscriber Spotlight - Hilton.pdf'
      },
    };

    const pdfMapping = pdfMappings[caseStudySlug];
    
    if (!pdfMapping) {
      return NextResponse.json(
        { error: 'Case study PDF not found' },
        { status: 404 }
      );
    }

    // Read the PDF file
    try {
      const pdfBuffer = fs.readFileSync(path.join(process.cwd(), 'public', pdfMapping.path));
      
      // Send email notification to dev team
      if (EMAIL_API_KEY) {
        try {
          const emailResponse = await sendEmailNotification(name, email, caseStudyTitle);
          
          if (!emailResponse.ok) {
            console.error('Email service error:', await emailResponse.text());
          }
        } catch (emailError) {
          console.error('Failed to send email notification:', emailError);
          // Don't fail the request if email fails
        }
      } else {
        // Fallback: log the notification (for development)
        console.log('PDF Download Notification:', {
          caseStudy: caseStudyTitle,
          downloadedBy: name,
          email: email,
          date: new Date().toLocaleString()
        });
      }

      // Return the PDF file
      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${pdfMapping.filename}"`,
          'Content-Length': pdfBuffer.length.toString(),
        },
      });

    } catch (fileError) {
      console.error('Error reading PDF file:', fileError);
      return NextResponse.json(
        { error: 'PDF file not found on server' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Error in PDF download API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(name: string, email: string, caseStudyTitle: string) {
  const emailData = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Case Study PDF Downloaded - ${caseStudyTitle}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: #f8f9fa; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Case Study PDF Download Notification</h2>
            <p><strong>Case Study:</strong> ${caseStudyTitle}</p>
          </div>
          
          <div class="field">
            <div class="label">Downloaded by</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">Download Date</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            This is an automated notification from the Clean Earth Renewables website.
          </p>
        </div>
      </body>
      </html>
    `,
    text: `
Case Study PDF Download Notification

Case Study: ${caseStudyTitle}
Downloaded by: ${name}
Email: ${email}
Download Date: ${new Date().toLocaleString()}

This is an automated notification from the Clean Earth Renewables website.
    `
  };

  const response = await fetch(EMAIL_SERVICE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${EMAIL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  return response;
}
