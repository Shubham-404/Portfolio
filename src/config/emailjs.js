// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
    SERVICE_ID: "not-key-found",
    
    TEMPLATE_ID: "not-key-found",
    
    PUBLIC_KEY: "not-key-found",
    
    TO_EMAIL: "not-key-found",
    
    TO_NAME: "not-key-found"
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
