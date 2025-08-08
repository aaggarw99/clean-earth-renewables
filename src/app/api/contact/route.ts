import { NextRequest, NextResponse } from 'next/server';

// Email service configuration
const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL || 'https://api.resend.com/emails';
const EMAIL_API_KEY = process.env.EMAIL_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL || 'devteam@clean-earth.org';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@clean-earth.org';

interface ContactFormData {
  customerType: string;
  utility: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  stateText: string;
  address: string;
  city: string;
  companyName: string;
  zipCode: string;
  message: string;
  fileUpload?: File;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData: ContactFormData = body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.customerType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = createEmailContent(formData);

    // Send email using Resend (recommended for Next.js)
    if (EMAIL_API_KEY) {
      const emailResponse = await sendEmailWithResend(emailContent);
      
      if (emailResponse.ok) {
        return NextResponse.json(
          { message: 'Email sent successfully' },
          { status: 200 }
        );
      } else {
        console.error('Email service error:', await emailResponse.text());
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log the email content (for development)
      console.log('Email would be sent:', emailContent);
      return NextResponse.json(
        { message: 'Email logged (development mode)' },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function createEmailContent(formData: ContactFormData) {
  const subject = `New Contact Form Submission - ${formData.customerType}`;
  
  const htmlContent = `
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
        .required { color: #dc3545; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          <p><strong>Customer Type:</strong> ${formData.customerType}</p>
        </div>
        
        <div class="field">
          <div class="label">Name <span class="required">*</span></div>
          <div class="value">${formData.name}</div>
        </div>
        
        <div class="field">
          <div class="label">Email <span class="required">*</span></div>
          <div class="value">${formData.email}</div>
        </div>
        
        ${formData.phone ? `
        <div class="field">
          <div class="label">Phone</div>
          <div class="value">${formData.phone}</div>
        </div>
        ` : ''}
        
        ${formData.utility ? `
        <div class="field">
          <div class="label">Utility</div>
          <div class="value">${formData.utility}</div>
        </div>
        ` : ''}
        
        ${formData.state || formData.stateText ? `
        <div class="field">
          <div class="label">State</div>
          <div class="value">${formData.state || formData.stateText}</div>
        </div>
        ` : ''}
        
        ${formData.address ? `
        <div class="field">
          <div class="label">Address</div>
          <div class="value">${formData.address}</div>
        </div>
        ` : ''}
        
        ${formData.city ? `
        <div class="field">
          <div class="label">City</div>
          <div class="value">${formData.city}</div>
        </div>
        ` : ''}
        
        ${formData.zipCode ? `
        <div class="field">
          <div class="label">Zip Code</div>
          <div class="value">${formData.zipCode}</div>
        </div>
        ` : ''}
        
        ${formData.companyName ? `
        <div class="field">
          <div class="label">Company Name</div>
          <div class="value">${formData.companyName}</div>
        </div>
        ` : ''}
        
        ${formData.message ? `
        <div class="field">
          <div class="label">Message</div>
          <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="label">Submission Time</div>
          <div class="value">${new Date().toLocaleString()}</div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission

Customer Type: ${formData.customerType}
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.utility ? `Utility: ${formData.utility}` : ''}
${formData.state || formData.stateText ? `State: ${formData.state || formData.stateText}` : ''}
${formData.address ? `Address: ${formData.address}` : ''}
${formData.city ? `City: ${formData.city}` : ''}
${formData.zipCode ? `Zip Code: ${formData.zipCode}` : ''}
${formData.companyName ? `Company Name: ${formData.companyName}` : ''}
${formData.message ? `Message: ${formData.message}` : ''}

Submission Time: ${new Date().toLocaleString()}
  `;

  return {
    subject,
    html: htmlContent,
    text: textContent
  };
}

async function sendEmailWithResend(emailContent: { subject: string; html: string; text: string }) {
  const response = await fetch(EMAIL_SERVICE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${EMAIL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    }),
  });

  return response;
} 