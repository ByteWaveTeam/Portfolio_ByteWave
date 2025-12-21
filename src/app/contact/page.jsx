/**
 * This page will handle client inquiries and business leads.
 * Future requirements:
 * - Interactive contact form using React Hook Form and Zod.
 * - Integration with an email service (Resend, SendGrid) or a backend API.
 * - Project inquiry questionnaire (Budget range, Timeline, Tech stack).
 * - Live chat integration (Optional).
 */

export default function ContactPage() {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Ready to start your next project? Contact us at <a href="mailto:bytewaveteams@gmail.com" className="text-accent underline">bytewaveteams@gmail.com</a>
        </p>
      </div>
    );
  }
