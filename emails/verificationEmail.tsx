//  This is a Template for email

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Button,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  const API = process.env.DOMAIN;

  return (
    <Html>
      <Head />
      <Preview>GYF Email Verification</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={upperSection}>
              <Heading style={h1}>
                Hi {username}, Verify your email address
              </Heading>
              <Text style={mainText}>
                Thanks for starting the new GYF account creation process. We
                want to make sure it's really you. Please enter the following
                verification code when prompted. If you don&apos;t want to
                create an account, you can ignore this message.
              </Text>
              <Section style={verificationSection}>
                <Text style={verifyText}>Verification code</Text>

                <Text style={codeText}>{otp}</Text>
                <Text style={validityText}>
                  (This code is valid for 1 hour)
                </Text>
                {/* <Button href={`${API}/verify/${username}`} style={buttonStyle}>
                  Verify here
                </Button> */}
              </Section>
            </Section>
            <Hr />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                Get Your Feedback (GYF) will never email you and ask you to
                disclose or verify your password, credit card, or banking
                account number.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was created and distributed by{" "}
            <Link
              href="https://www.linkedin.com/in/anshumansinha2001"
              target="_blank"
              style={link}
            >
              Anshuman Sinha
            </Link>
            . © 2024 Get Your Feedback, Inc. All rights reserved. For any
            issues, please contact me at{" "}
            <Link href="mailto:anshumansinha2001@gmail.com" style={link}>
              anshumansinha2001@gmail.com
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const verifyText = {
  ...text,
  width: "100%",
  margin: 0,
  fontWeight: "bold",
  textAlign: "center" as const,
};

const buttonStyle = {
  backgroundColor: "#7C00FE",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  fontSize: "16px",
  margin: "20px 0",
  fontWeight: "bold",
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const validityText = {
  ...text,
  margin: "0px",
  textAlign: "center" as const,
};

const verificationSection = {
  display: "flex",
  width: "100%",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };
