import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
  Container,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New contact form message from {name}</Preview>
      
      <Container style={container}>
        <Section style={header}>
          <Row>
            <Heading style={headerTitle}>Portfolio Contact Form</Heading>
          </Row>
        </Section>

        <Section style={content}>
          <Heading style={h1}>New Message from Your Portfolio</Heading>
          
          <Text style={text}>
            You've received a new message through your portfolio contact form:
          </Text>

          <Section style={messageBox}>
            <Row style={detailRow}>
              <Text style={label}>From:</Text>
              <Text style={value}>{name}</Text>
            </Row>
            <Row style={detailRow}>
              <Text style={label}>Email:</Text>
              <Text style={value}>{email}</Text>
            </Row>
            <Row style={detailRow}>
              <Text style={label}>Subject:</Text>
              <Text style={value}>{subject}</Text>
            </Row>
          </Section>

          <Section style={messageContent}>
            <Text style={messageLabel}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />
          
          <Section style={buttonSection}>
            <Button href={`mailto:${email}?subject=Re: ${subject}`} style={button}>
              Reply to {name}
            </Button>
          </Section>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            This message was sent from your portfolio website contact form.
          </Text>
          <Text style={footerText}>
            Tolga Zorlu - Portfolio © {new Date().getFullYear()}
          </Text>
        </Section>
      </Container>
    </Html>
  );
}

// Styles
const container = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, Arial, sans-serif',
  padding: '0',
  margin: '0 auto',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#1f2937',
  padding: '24px 32px',
  borderRadius: '12px 12px 0 0',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '600',
  margin: '0',
  textAlign: 'center' as const,
};

const content = {
  padding: '32px',
  backgroundColor: '#ffffff',
};

const h1 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 24px 0',
};

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px 0',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '24px',
  border: '1px solid #e5e7eb',
};

const detailRow = {
  marginBottom: '12px',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0 0 4px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const value = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0',
  fontWeight: '500',
};

const messageContent = {
  marginBottom: '32px',
};

const messageLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0 0 12px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const messageText = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '20px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const buttonSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  border: 'none',
};

const footer = {
  backgroundColor: '#f9fafb',
  padding: '24px 32px',
  borderRadius: '0 0 12px 12px',
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  textAlign: 'center' as const,
  margin: '0 0 8px 0',
};