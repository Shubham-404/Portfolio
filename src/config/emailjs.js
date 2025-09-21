// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
    // Your EmailJS Service ID - reads from environment variable
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    
    // Your EmailJS Template ID - reads from environment variable
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    
    // Your EmailJS Public Key - reads from environment variable
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    
    // Your email address (where messages will be sent) - reads from environment variable
    TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL,
    
    // Your name (appears in the email) - reads from environment variable
    TO_NAME: import.meta.env.VITE_EMAILJS_TO_NAME
};

// Validation function to check if EmailJS is properly configured
export const validateEmailJSConfig = () => {
    const missing = [];
    if (!EMAILJS_CONFIG.SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID');
    if (!EMAILJS_CONFIG.TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID');
    if (!EMAILJS_CONFIG.PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY');
    if (!EMAILJS_CONFIG.TO_EMAIL) missing.push('VITE_EMAILJS_TO_EMAIL');
    if (!EMAILJS_CONFIG.TO_NAME) missing.push('VITE_EMAILJS_TO_NAME');
    
    if (missing.length > 0) {
        console.error(`EmailJS configuration incomplete. Missing environment variables: ${missing.join(', ')}`);
        return false;
    }
    return true;
};

// Instructions for setup:
// Local Development:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{message}} - the message content
//    - {{to_name}} - your name
//    - {{reply_to}} - sender's email for reply
// 5. Get your Service ID, Template ID, and Public Key
// 6. Add these to your .env file:
//    VITE_EMAILJS_SERVICE_ID=your_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_public_key
//    VITE_EMAILJS_TO_EMAIL=your_email@domain.com
//    VITE_EMAILJS_TO_NAME=Your Name
//
// Netlify Deployment:
// 1. Go to your Netlify dashboard
// 2. Navigate to Site settings > Environment variables
// 3. Add all VITE_EMAILJS_* variables with their respective values
