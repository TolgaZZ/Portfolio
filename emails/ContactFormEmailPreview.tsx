import ContactFormEmail from './ContactFormEmail';

// This is for preview/development purposes
export default function ContactFormEmailPreview() {
  return (
    <ContactFormEmail
      name="John Doe"
      email="john.doe@example.com"
      subject="Interested in working together"
      message="Hi Tolga,

I came across your portfolio and I'm really impressed with your work. I'd love to discuss a potential project with you.

Could we schedule a call this week?

Best regards,
John"
    />
  );
}