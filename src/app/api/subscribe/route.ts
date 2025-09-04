import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend configuration
const FULL_ACCESS_API_KEY = process.env.FULL_ACCESS_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

interface SubscriptionData {
  email: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const subscriptionData: SubscriptionData = await request.json();
    
    // Validate required fields
    if (!subscriptionData.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subscriptionData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate API configuration
    if (!FULL_ACCESS_API_KEY) {
      console.error('FULL_ACCESS_API_KEY not configured');
      return NextResponse.json(
        { error: 'Full access API key not configured' },
        { status: 500 }
      );
    }

    if (!RESEND_AUDIENCE_ID) {
      console.error('RESEND_AUDIENCE_ID not configured');
      return NextResponse.json(
        { error: 'Audience not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(FULL_ACCESS_API_KEY);

    // Add contact to Resend Audience
    const result = await resend.contacts.create({
      email: subscriptionData.email.toLowerCase(),
      firstName: undefined,
      lastName: undefined,
      unsubscribed: false,
      audienceId: RESEND_AUDIENCE_ID,
    });

    if (result.error) {
      // Check if contact already exists
      if (result.error.message?.includes('already exists') || 
          result.error.message?.includes('duplicate')) {
        return NextResponse.json(
          { message: 'Email is already subscribed' },
          { status: 200 }
        );
      }
      
      console.error('Resend API error:', result.error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve audience info (for admin use)
export async function GET() {
  try {
    if (!FULL_ACCESS_API_KEY || !RESEND_AUDIENCE_ID) {
      return NextResponse.json(
        { error: 'Service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(FULL_ACCESS_API_KEY);
    
    const result = await resend.audiences.get(RESEND_AUDIENCE_ID);
    
    if (result.error) {
      console.error('Error fetching audience:', result.error);
      return NextResponse.json(
        { error: 'Failed to fetch audience data' },
        { status: 500 }
      );
    }

    return NextResponse.json({ audience: result.data });
  } catch (error) {
    console.error('Error in GET /api/subscribe:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
