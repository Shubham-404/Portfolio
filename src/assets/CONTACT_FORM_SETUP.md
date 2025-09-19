# Contact Form Setup Instructions

## Overview
The contact form uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'your_service_id_here',
    TEMPLATE_ID: 'your_template_id_here', 
    PUBLIC_KEY: 'your_public_key_here',
    TO_EMAIL: 'your-email@example.com',
    TO_NAME: 'Your Name'
};
```

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message
5. Check the browser console for any error messages

## Troubleshooting

### Common Issues:

1. **"Invalid email" error**: Check that your email service is properly configured
2. **"Template not found" error**: Verify your template ID is correct
3. **"Service not found" error**: Verify your service ID is correct
4. **"Invalid public key" error**: Verify your public key is correct

### Debug Mode:
- Open browser developer tools
- Check the console for detailed error messages
- Look for "Email sent successfully" or error details

### EmailJS Limits:
- Free plan: 200 emails/month
- Paid plans available for higher limits

## Security Notes
- Never commit real EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code
- EmailJS handles the actual email sending securely

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
