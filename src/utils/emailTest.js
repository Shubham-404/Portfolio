// EmailJS Test Utility
// Use this to test your EmailJS configuration

import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const testEmailJS = async () => {
    try {
        console.log('Testing EmailJS configuration...');
        console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
        console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
        console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);
        
        // Initialize EmailJS
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        
        // Test with sample data
        const testParams = {
            from_name: 'Test User',
            from_email: 'test@example.com',
            message: 'This is a test message from the contact form.',
            to_name: EMAILJS_CONFIG.TO_NAME,
            reply_to: 'test@example.com',
        };
        
        console.log('Sending test email...');
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            testParams,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        
        console.log('✅ Test email sent successfully!', response);
        return { success: true, response };
        
    } catch (error) {
        console.error('❌ Test email failed:', error);
        return { success: false, error };
    }
};

// Usage in browser console:
// import { testEmailJS } from './src/utils/emailTest.js';
// testEmailJS();
