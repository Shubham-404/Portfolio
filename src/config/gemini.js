// Gemini API Configuration
// Get your API key from: https://aistudio.google.com/app/apikey

export const GEMINI_CONFIG = {
    // Your Gemini API Key - reads from environment variable
    API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
    
    // Gemini API endpoint
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
    
    // Validation prompt template
    VALIDATION_PROMPT: `You are a form validation assistant. Analyze the following contact form details and determine if they appear to be legitimate or potentially fake/spam.

Form Details:
- Name: {{name}}
- Email: {{email}}
- Message: {{message}}

Please analyze these details and respond with ONLY a single digit:
- 1 if the details appear legitimate and genuine
- 0 if the details appear fake, spam, or suspicious

Consider these factors:
- Name appears real (not gibberish, not obviously fake)
- Email format is valid and appears legitimate
- Message content is coherent and meaningful
- Overall impression suggests genuine communication intent

Respond with only: 1 or 0`
};

// Validation function to check if API key is properly configured
export const validateGeminiConfig = () => {
    if (!GEMINI_CONFIG.API_KEY) {
        console.error('Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your environment variables.');
        return false;
    }
    return true;
};

// Instructions for setup:
// Local Development:
// 1. Create a .env file in your project root
// 2. Add: VITE_GEMINI_API_KEY=your_actual_api_key_here
// 3. The API key should start with 'AIza...'
//
// Netlify Deployment:
// 1. Go to your Netlify dashboard
// 2. Navigate to Site settings > Environment variables
// 3. Add: VITE_GEMINI_API_KEY with your API key value