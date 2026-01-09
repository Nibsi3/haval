import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { defaultDealership, getDealershipById } from "@/lib/dealerships";

// This ensures the route is handled as a serverless function on Vercel
export const dynamic = "force-dynamic";

const resend = new Resend("re_NQrmxZwj_3c5nMozgUJVUBwtzmee7kide");
const DEALER_EMAIL = "cameronfalck03@gmail.com";

// Lead types
type LeadType = "test_drive" | "quote" | "trade_in" | "finance" | "contact";

interface LeadData {
  type: LeadType;
  name: string;
  email: string;
  phone: string;
  vehicleInterest?: string;
  message?: string;
  dealershipId?: string;
  // Trade-in specific
  currentVehicle?: string;
  currentMileage?: string;
  currentYear?: string;
  // Finance specific
  depositAmount?: string;
  termMonths?: string;
  // Additional fields
  preferredContactTime?: string;
  source?: string;
}

// Email templates
const getEmailSubject = (type: LeadType, vehicleInterest?: string): string => {
  const subjects: Record<LeadType, string> = {
    test_drive: `New Test Drive Request${vehicleInterest ? ` - ${vehicleInterest}` : ""}`,
    quote: `New Quote Request${vehicleInterest ? ` - ${vehicleInterest}` : ""}`,
    trade_in: `New Trade-In Valuation Request${vehicleInterest ? ` - ${vehicleInterest}` : ""}`,
    finance: `New Finance Enquiry${vehicleInterest ? ` - ${vehicleInterest}` : ""}`,
    contact: `New Contact Form Submission`,
  };
  return subjects[type];
};

const getLeadTypeLabel = (type: LeadType): string => {
  const labels: Record<LeadType, string> = {
    test_drive: "Test Drive Booking",
    quote: "Quote Request",
    trade_in: "Trade-In Valuation",
    finance: "Finance Enquiry",
    contact: "General Contact",
  };
  return labels[type];
};

// Generate HTML email for dealer
const generateDealerEmail = (data: LeadData): string => {
  const timestamp = new Date().toLocaleString("en-ZA", {
    timeZone: "Africa/Johannesburg",
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { font-size: 16px; color: #333; margin-top: 4px; }
    .highlight { background: #3b82f6; color: white; padding: 10px 15px; display: inline-block; border-radius: 4px; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
    .cta { background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Lead - ${getLeadTypeLabel(data.type)}</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.8;">${timestamp}</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Lead Type</div>
        <div class="value"><span class="highlight">${getLeadTypeLabel(data.type)}</span></div>
      </div>
      <div class="field">
        <div class="label">Customer Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>
      ${data.vehicleInterest ? `
      <div class="field">
        <div class="label">Vehicle Interest</div>
        <div class="value">${data.vehicleInterest}</div>
      </div>
      ` : ""}
      ${data.currentVehicle ? `
      <div class="field">
        <div class="label">Current Vehicle (Trade-In)</div>
        <div class="value">${data.currentVehicle} ${data.currentYear ? `(${data.currentYear})` : ""} ${data.currentMileage ? `- ${data.currentMileage} km` : ""}</div>
      </div>
      ` : ""}
      ${data.depositAmount ? `
      <div class="field">
        <div class="label">Finance Details</div>
        <div class="value">Deposit: R${data.depositAmount} | Term: ${data.termMonths} months</div>
      </div>
      ` : ""}
      ${data.message ? `
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${data.message}</div>
      </div>
      ` : ""}
      ${data.preferredContactTime ? `
      <div class="field">
        <div class="label">Preferred Contact Time</div>
        <div class="value">${data.preferredContactTime}</div>
      </div>
      ` : ""}
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
        <a href="tel:${data.phone}" class="cta">Call Customer Now</a>
      </div>
    </div>
    <div class="footer">
      <p>This lead was submitted via the Maritime Group website.</p>
      <p>Source: ${data.source || "Website Form"}</p>
    </div>
  </div>
</body>
</html>
  `;
};

// Generate confirmation email for customer
const generateCustomerEmail = (data: LeadData, dealershipName: string): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; background: #ffffff; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; background: #f5f5f5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Thank You, ${data.name}!</h1>
    </div>
    <div class="content">
      <p>We've received your ${getLeadTypeLabel(data.type).toLowerCase()} request and a member of our team will be in touch shortly.</p>
      
      <h3>Your Request Details:</h3>
      <ul>
        <li><strong>Request Type:</strong> ${getLeadTypeLabel(data.type)}</li>
        ${data.vehicleInterest ? `<li><strong>Vehicle:</strong> ${data.vehicleInterest}</li>` : ""}
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
      </ul>
      
      <p>If you have any immediate questions, please don't hesitate to contact us directly.</p>
      
      <p>Best regards,<br><strong>${dealershipName}</strong></p>
    </div>
    <div class="footer">
      <p>This is an automated confirmation email from The Maritime Group.</p>
      <p>© ${new Date().getFullYear()} The Maritime Group. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.type) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, type" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get dealership config
    const dealership = data.dealershipId
      ? getDealershipById(data.dealershipId) || defaultDealership
      : defaultDealership;

    // Generate emails
    const dealerEmailHtml = generateDealerEmail(data);
    const customerEmailHtml = generateCustomerEmail(data, dealership.name);
    const emailSubject = getEmailSubject(data.type, data.vehicleInterest);

    // Generate lead ID for tracking
    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Send email to dealer
    try {
      await resend.emails.send({
        from: "Maritime Motors <leads@resend.dev>",
        to: DEALER_EMAIL,
        subject: emailSubject,
        html: dealerEmailHtml,
      });

      // Send confirmation email to customer
      await resend.emails.send({
        from: "Maritime Motors <noreply@resend.dev>",
        to: data.email,
        subject: `Thank you for your ${getLeadTypeLabel(data.type).toLowerCase()} request`,
        html: customerEmailHtml,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue even if email fails - lead is still captured
    }

    console.log(`Lead ${leadId} submitted: ${data.type} - ${data.name} - ${data.vehicleInterest || "General"}`);


    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      leadId,
      dealership: {
        name: dealership.name,
        email: dealership.email,
      },
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process lead submission" },
      { status: 500 }
    );
  }
}

// GET endpoint to verify API is working
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Leads API is operational",
    supportedTypes: ["test_drive", "quote", "trade_in", "finance", "contact"],
  });
}
