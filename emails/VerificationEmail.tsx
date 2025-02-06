import * as React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <html>
      {/* <head><meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Verification</title>
            <style>
                body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                        }
                .otp {
                        font-size: 24px;
                        font-weight: bold;
                        color: #333;
                        background: #f8f8f8;
                        padding: 10px;
                        display: inline-block;
                        border-radius: 5px;
                        margin: 15px 0;
                    }
                .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #777;
                        }
            </style>
        </head> */}
    </html>
  );
}
